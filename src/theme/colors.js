/**
 * App Theme - Colors
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Platform } from 'react-native';

const app = {
    // background: 'rgb(239, 239, 244)',
    // background: '#E9EBEE',
    background: '#FAFAFA',
    cardBackground: '#FFFFFF',
    listItemBackground: '#FFFFFF',

    // 主色 dominate color
    white: '#FFFFFF',
    // blue: '#3C97C7',
    blue: '#1eade5',
    orange: '#E3665C',
    green: '#40B8AC',
    darkBlue: '#417EAE',
    placeholder: '#9B9B9B',

    // 辅色 accent color
    yellow: '#FFCC29',
    black: '#36393B',
    gray: '#9B9B9B',
    lightgray: '#F2F2F2',

    light_gray_F4F7FD: '#F4F7FD',
    light_gray_F5F5F5: '#F5F5F5',
    light_gray_FDFDFD: '#FDFDFD',
    light_gray_F6F6F6: '#F6F6F6',
    light_gray_F8F8F8: '#F8F8F8',
};

// 字体颜色
const font = {
    level1: '#36393B', // 一级文字颜色
    level2: '#9B9B9B', // 二级文字颜色
    level3: '#CACACA', // 三级文字颜色
    white: '#FFFFFF', // 反白文字颜色
    color_black_44444D: '#44444D',
    color_black_333333: '#333333',
    color_black_2A2C39: '#2A2C39',
    color_orange_FF5E29: '#FF5E29',
    color_gray_979797: '#979797',
    placeholder: '#9B9B9B',
};

// 分割线颜色
const separator = {
    topOrBottom: '#D8D8D8', // 顶部或底部分割线
    light: '#EBEBEB', // 浅色
};
const androdPrimaryColor =
    Platform.OS === 'android' && Platform.Version <= 22 ? app.black : app.black;
const brand = {
    brand: {
        primary: Platform.select({
            android: androdPrimaryColor,
            ios: '#3C97C7',
        }),
        secondary: '#17233D',
    },
};

const text = {
    textPrimary: '#222222',
    textSecondary: '#777777',
    headingPrimary: brand.brand.primary,
    headingSecondary: brand.brand.primary,
};

const borders = {
    border: '#D0D1D5',
};

const tabbar = {
    tabBar: {
        background: '#ffffff',
        iconDefault: '#BABDC2',
        iconSelected: brand.brand.primary,
    },
};

export default {
    ...app,
    font,
    separator,
    ...brand,
    ...text,
    ...borders,
    ...tabbar,
};
