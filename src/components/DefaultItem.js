/**
 * desc：默认样式的Item
 * author：young
 * date： 2018/9/28
 */
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from './Item';
import PropTypes from 'prop-types';
import { AppColors } from '../theme/index';
import ImageButton from './ImageButton';

export default class DefaultItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        item: PropTypes.object,
        index: PropTypes.number,
        onPressItem: PropTypes.func,
    };

    static defaultProps = {
        item: { leftTitle: '', rightTitle: '' },
        index: 0,
        onPressItem: () => {},
    };

    _onPress = () => {
        this.props.onPressItem();
    };

    render() {
        const leftImg = this.props.item.leftImage;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this._onPress}>
                <View style={styles.container}>
                    {leftImg && (
                        <Image style={styles.leftImage} source={leftImg} />
                    )}

                    <View style={styles.content}>
                        <Text>{this.props.item.leftTitle}</Text>
                        <Text>{this.props.item.rightTitle}</Text>
                    </View>
                    <Image
                        style={styles.arrow}
                        source={require('../pages/area/img/arrow.png')}
                    />
                </View>
                <View style={styles.item_underline} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        // borderRadius: 3,
        // borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 8,
        paddingLeft: 5,
    },
    arrow: {
        width: 8,
        height: 13,
    },
    leftImage: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    item_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 5,
    },
    item_underline: {
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#D8D8D8',
    },
});
