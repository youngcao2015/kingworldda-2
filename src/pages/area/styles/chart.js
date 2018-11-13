import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const chart_cell = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 2,
        borderColor: 'gray',

        // 以下是阴影属性：
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: 'lightgray',
        // 注意：这一句是可以让安卓拥有灰色阴影
        elevation: 3,
        zIndex: Platform.OS === 'ios' ? 1 : 0,
    },
    chart: {
        flex: 1,
        width: width,
        height: height * 0.5,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
});

module.exports = {
    chart_cell,
};
