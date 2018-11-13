/**
 * App Theme - Sizes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const isIphoneX = () =>
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812);

const AppSizes = {
    isIphoneX: isIphoneX,
    isIphoneXTabSafeHeight: isIphoneX() ? 34 : 0,
    isIphoneXNavSafeHeight: isIphoneX() ? 24 : 0,
    // Window Dimensions
    screen: {
        height: screenHeight,
        width: screenWidth,

        widthHalf: screenWidth * 0.5,
        widthThird: screenWidth * 0.333,
        widthTwoThirds: screenWidth * 0.666,
        widthQuarter: screenWidth * 0.25,
        widthThreeQuarters: screenWidth * 0.75,
    },
    navBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 84 : 64) : 74,
    navBarPaddingTop: Platform.OS === 'ios' ? (isIphoneX() ? 15 : 0) : 20,
    statusBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 0,
    tabBarHeight: Platform.OS === 'ios' ? 49 : 51,

    padding: 20,
    paddingSml: 10,

    borderRadius: 2,
};

module.exports = {
    AppSizes,
};
