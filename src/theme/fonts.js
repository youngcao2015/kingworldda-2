/**
 * App Theme - Fonts
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Platform } from 'react-native';
import { setSpText } from '../utils/ScreenUtil';

function lineHeight(fontSize) {
    const multiplier = fontSize > 20 ? 0.1 : 0.33;
    return parseInt(fontSize + fontSize * multiplier, 10);
}

const base = {
    size: 14,
    lineHeight: lineHeight(14),
    ...Platform.select({
        ios: {
            family: 'HelveticaNeue',
        },
        android: {
            family: 'Roboto',
        },
    }),
};

const fontSize = {
    fontSize_20: setSpText(20),
    fontSize_24: setSpText(24),
    fontSize_26: setSpText(26),
    fontSize_28: setSpText(28),
    fontSize_30: setSpText(30),
    fontSize_32: setSpText(32),
    fontSize_34: setSpText(34),
    fontSize_36: setSpText(36),
    fontSize_48: setSpText(48),
};

const AppFonts = {
    base: { ...base },
    fontSize: { ...fontSize },
    h1: {
        ...base,
        size: base.size * 1.75,
        lineHeight: lineHeight(base.size * 2),
    },
    h2: {
        ...base,
        size: base.size * 1.5,
        lineHeight: lineHeight(base.size * 1.75),
    },
    h3: {
        ...base,
        size: base.size * 1.25,
        lineHeight: lineHeight(base.size * 1.5),
    },
    h4: {
        ...base,
        size: base.size * 1.1,
        lineHeight: lineHeight(base.size * 1.25),
    },
    h5: { ...base },
    // text_size_80px: {
    //     size:
    // },
};

module.exports = {
    AppFonts,
};
