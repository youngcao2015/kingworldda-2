// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) {
    // author: meizz
    const o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            `${this.getFullYear()}`.substr(4 - RegExp.$1.length)
        );
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : `00${o[k]}`.substr(`${o[k]}`.length)
            );
        }
    }
    return fmt;
};

/**
 * 将数字月份替换成汉字月份
 * @param month
 * @returns {null}
 */
Date.prototype.mapMonth = function(month) {
    const monthMaps = {
        '01': '一月',
        '02': '二月',
        '03': '三月',
        '04': '四月',
        '05': '五月',
        '06': '六月',
        '07': '七月',
        '08': '八月',
        '09': '九月',
        '10': '十月',
        '11': '十一月',
        '12': '十二月',
    };
    return Object.prototype.hasOwnProperty.call(monthMaps, month)
        ? monthMaps[month]
        : null;
};

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function(fmt) {
    const o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, // 小时
        'H+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        S: this.getMilliseconds(), // 毫秒
    };
    const week = {
        0: '/u65e5',
        1: '/u4e00',
        2: '/u4e8c',
        3: '/u4e09',
        4: '/u56db',
        5: '/u4e94',
        6: '/u516d',
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            `${this.getFullYear()}`.substr(4 - RegExp.$1.length)
        );
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (RegExp.$1.length > 1
                ? RegExp.$1.length > 2
                    ? '/u661f/u671f'
                    : '/u5468'
                : '') + week[`${this.getDay()}`]
        );
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : `00${o[k]}`.substr(`${o[k]}`.length)
            );
        }
    }
    return fmt;
};

const timeOffset = new Date().getTimezoneOffset() * 60 * 1000;

/**
 *
 * 日期格式化;
 */
export default class DateUtils {
    /**
     * 时间转化为时间;
     * @param {number} date  时间搓
     * @param {String} fmt
     */
    static format(date, fmt) {
        // timeOffset 返回的是负数， 加上时间偏差，则显示的是 中时区的时间。
        return new Date(date * 1000 + timeOffset).Format(fmt);
    }

    static formatChina(date, fmt) {
        // timeOffset 返回的是负数， 加上时间偏差，则显示的是 中时区的时间。
        return new Date(date * 1000).Format(fmt);
    }

    static formatDefault(date) {
        return this.format(date, 'yyyy-MM-dd hh:mm:ss');
    }

    // 或得当前的时间搓;
    static timesTemps() {
        return Math.floor(new Date().getTime() / 1000);
    }

    // 最近一天的时间戳;
    static dayTemps() {
        return this.timesHoursTemps(24);
    }

    // 最近三天的时间戳
    static day3temps() {
        return this.timesHoursTemps(24 * 3);
    }

    // 最近一个周;
    static weekTemps() {
        return this.timesHoursTemps(24 * 7);
    }

    // 获得最近一个月;
    static mouthTemps() {
        return this.timesHoursTemps(24 * 31);
    }

    /**
     * 或得几个小时前的时间搓;
     * @param {number} hours
     */
    static timesHoursTemps(hours) {
        if (typeof hours === String) hours = +hours;
        return this.timesTemps() - hours * 3600;
    }

    /**
     * 时间格式化;
     * @param {number} date  时间搓
     * @param {String} fmt   字符串格式
     */
    static pattern(date, fmt) {
        return new Date(date * 10000).format(fmt);
    }

    static mapMonth(month) {
        return new Date().mapMonth(month);
    }
}
