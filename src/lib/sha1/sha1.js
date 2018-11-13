/**
 * CryptoJS core components.
 */
var CryptoJS =
    CryptoJS ||
    (function(Math, undefined) {
        const create =
            Object.create ||
            (function() {
                function F() {}
                return function(obj) {
                    let subtype;
                    F.prototype = obj;
                    subtype = new F();
                    F.prototype = null;
                    return subtype;
                };
            })();
        const C = {};
        const C_lib = (C.lib = {});
        const Base = (C_lib.Base = (function() {
            return {
                extend: function(overrides) {
                    const subtype = create(this);
                    if (overrides) {
                        subtype.mixIn(overrides);
                    }
                    if (
                        !subtype.hasOwnProperty('init') ||
                        this.init === subtype.init
                    ) {
                        subtype.init = function() {
                            subtype.$super.init.apply(this, arguments);
                        };
                    }
                    subtype.init.prototype = subtype;
                    subtype.$super = this;
                    return subtype;
                },
                create: function() {
                    const instance = this.extend();
                    instance.init(...arguments);
                    return instance;
                },
                init: function() {},
                mixIn: function(properties) {
                    for (const propertyName in properties) {
                        if (properties.hasOwnProperty(propertyName)) {
                            this[propertyName] = properties[propertyName];
                        }
                    }
                    if (properties.hasOwnProperty('toString')) {
                        this.toString = properties.toString;
                    }
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                },
            };
        })());
        var WordArray = (C_lib.WordArray = Base.extend({
            init: function(words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined) {
                    this.sigBytes = sigBytes;
                } else {
                    this.sigBytes = words.length * 4;
                }
            },
            toString: function(encoder) {
                return (encoder || Hex).stringify(this);
            },
            concat: function(wordArray) {
                const thisWords = this.words;
                const thatWords = wordArray.words;
                const thisSigBytes = this.sigBytes;
                const thatSigBytes = wordArray.sigBytes;
                this.clamp();
                if (thisSigBytes % 4) {
                    for (var i = 0; i < thatSigBytes; i += 1) {
                        const thatByte =
                            (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                        thisWords[(thisSigBytes + i) >>> 2] |=
                            thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                    }
                } else {
                    for (var i = 0; i < thatSigBytes; i += 4) {
                        thisWords[(thisSigBytes + i) >>> 2] =
                            thatWords[i >>> 2];
                    }
                }
                this.sigBytes += thatSigBytes;
                return this;
            },
            clamp: function() {
                const words = this.words;
                const sigBytes = this.sigBytes;
                words[sigBytes >>> 2] &=
                    0xffffffff << (32 - (sigBytes % 4) * 8);
                words.length = Math.ceil(sigBytes / 4);
            },
            clone: function() {
                const clone = Base.clone.call(this);
                clone.words = this.words.slice(0);
                return clone;
            },
            random: function(nBytes) {
                const words = [];
                const r = function(m_w) {
                    var m_w = m_w;
                    let m_z = 0x3ade68b1;
                    const mask = 0xffffffff;
                    return function() {
                        m_z = (0x9069 * (m_z & 0xffff) + (m_z >> 0x10)) & mask;
                        m_w = (0x4650 * (m_w & 0xffff) + (m_w >> 0x10)) & mask;
                        let result = ((m_z << 0x10) + m_w) & mask;
                        result /= 0x100000000;
                        result += 0.5;
                        return result * (Math.random() > 0.5 ? 1 : -1);
                    };
                };
                for (var i = 0, rcache; i < nBytes; i += 4) {
                    const _r = r((rcache || Math.random()) * 0x100000000);
                    rcache = _r() * 0x3ade67b7;
                    words.push((_r() * 0x100000000) | 0);
                }
                return new WordArray.init(words, nBytes);
            },
        }));
        const C_enc = (C.enc = {});
        var Hex = (C_enc.Hex = {
            stringify: function(wordArray) {
                const words = wordArray.words;
                const sigBytes = wordArray.sigBytes;
                const hexChars = [];
                for (let i = 0; i < sigBytes; i += 1) {
                    const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 0x0f).toString(16));
                }
                return hexChars.join('');
            },
            parse: function(hexStr) {
                const hexStrLength = hexStr.length;
                const words = [];
                for (let i = 0; i < hexStrLength; i += 2) {
                    words[i >>> 3] |=
                        parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                }
                return new WordArray.init(words, hexStrLength / 2);
            },
        });
        const Latin1 = (C_enc.Latin1 = {
            stringify: function(wordArray) {
                const words = wordArray.words;
                const sigBytes = wordArray.sigBytes;
                const latin1Chars = [];
                for (let i = 0; i < sigBytes; i += 1) {
                    const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join('');
            },
            parse: function(latin1Str) {
                const latin1StrLength = latin1Str.length;
                const words = [];
                for (let i = 0; i < latin1StrLength; i += 1) {
                    words[i >>> 2] |=
                        (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                }
                return new WordArray.init(words, latin1StrLength);
            },
        });
        const Utf8 = (C_enc.Utf8 = {
            stringify: function(wordArray) {
                try {
                    return decodeURIComponent(
                        escape(Latin1.stringify(wordArray))
                    );
                } catch (e) {
                    throw new Error('Malformed UTF-8 data');
                }
            },
            parse: function(utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            },
        });
        const BufferedBlockAlgorithm = (C_lib.BufferedBlockAlgorithm = Base.extend(
            {
                reset: function() {
                    this._data = new WordArray.init();
                    this._nDataBytes = 0;
                },
                _append: function(data) {
                    if (typeof data === 'string') {
                        data = Utf8.parse(data);
                    }
                    this._data.concat(data);
                    this._nDataBytes += data.sigBytes;
                },
                _process: function(doFlush) {
                    const data = this._data;
                    const dataWords = data.words;
                    const dataSigBytes = data.sigBytes;
                    const blockSize = this.blockSize;
                    const blockSizeBytes = blockSize * 4;
                    let nBlocksReady = dataSigBytes / blockSizeBytes;
                    if (doFlush) {
                        nBlocksReady = Math.ceil(nBlocksReady);
                    } else {
                        nBlocksReady = Math.max(
                            (nBlocksReady | 0) - this._minBufferSize,
                            0
                        );
                    }
                    const nWordsReady = nBlocksReady * blockSize;
                    const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                    if (nWordsReady) {
                        for (
                            let offset = 0;
                            offset < nWordsReady;
                            offset += blockSize
                        ) {
                            this._doProcessBlock(dataWords, offset);
                        }
                        var processedWords = dataWords.splice(0, nWordsReady);
                        data.sigBytes -= nBytesReady;
                    }
                    return new WordArray.init(processedWords, nBytesReady);
                },
                clone: function() {
                    const clone = Base.clone.call(this);
                    clone._data = this._data.clone();
                    return clone;
                },
                _minBufferSize: 0,
            }
        ));
        const Hasher = (C_lib.Hasher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            init: function(cfg) {
                this.cfg = this.cfg.extend(cfg);
                this.reset();
            },
            reset: function() {
                BufferedBlockAlgorithm.reset.call(this);
                this._doReset();
            },
            update: function(messageUpdate) {
                this._append(messageUpdate);
                this._process();
                return this;
            },
            finalize: function(messageUpdate) {
                if (messageUpdate) {
                    this._append(messageUpdate);
                }
                const hash = this._doFinalize();
                return hash;
            },
            blockSize: 512 / 32,
            _createHelper: function(hasher) {
                return function(message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            },
            _createHmacHelper: function(hasher) {
                return function(message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            },
        }));
        var C_algo = (C.algo = {});
        return C;
    })(Math);

const C = CryptoJS;
const C_lib = C.lib;
const WordArray = C_lib.WordArray;
const Hasher = C_lib.Hasher;
const C_algo = C.algo;
const W = [];
const SHA1 = (sha1 = C_algo.SHA1 = Hasher.extend({
    _doReset: function() {
        this._hash = new WordArray.init([
            0x67452301,
            0xefcdab89,
            0x98badcfe,
            0x10325476,
            0xc3d2e1f0,
        ]);
    },
    _doProcessBlock: function(M, offset) {
        const H = this._hash.words;
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let i = 0; i < 80; i += 1) {
            if (i < 16) {
                W[i] = M[offset + i] | 0;
            } else {
                const n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = (n << 1) | (n >>> 31);
            }
            let t = ((a << 5) | (a >>> 27)) + e + W[i];
            if (i < 20) {
                t += ((b & c) | (~b & d)) + 0x5a827999;
            } else if (i < 40) {
                t += (b ^ c ^ d) + 0x6ed9eba1;
            } else if (i < 60) {
                t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
            } else {
                t += (b ^ c ^ d) - 0x359d3e2a;
            }
            e = d;
            d = c;
            c = (b << 30) | (b >>> 2);
            b = a;
            a = t;
        }
        H[0] = (H[0] + a) | 0;
        H[1] = (H[1] + b) | 0;
        H[2] = (H[2] + c) | 0;
        H[3] = (H[3] + d) | 0;
        H[4] = (H[4] + e) | 0;
    },
    _doFinalize: function() {
        const data = this._data;
        const dataWords = data.words;
        const nBitsTotal = this._nDataBytes * 8;
        const nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(
            nBitsTotal / 0x100000000
        );
        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;
        this._process();
        return this._hash;
    },
    clone: function() {
        const clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
    },
}));
C.SHA1 = Hasher._createHelper(SHA1);
C.HmacSHA1 = Hasher._createHmacHelper(SHA1);

export default CryptoJS;
