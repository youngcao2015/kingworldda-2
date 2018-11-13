/**
 * desc：
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class SalesDataItem extends Component {
    static propTypes = {
        onPressItem: PropTypes.func,
    };

    static defaultProps = {
        onPressItem: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
        };
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.container}
                onPress={() => this.props.onPressItem(this.props.item)}
            >
                <View style={styles.item_content}>
                    <Text style={{ color: 'black' }}>
                        {this.state.item.customerName}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            justifyContent: 'space-between',
                        }}
                    >
                        {/*<Text>{`终端销量：${this.state.item.number}`}</Text>*/}
                        <Text>{`总销售额：${this.state.item.sumMoney}`}</Text>
                    </View>
                </View>
                <View style={styles.item_underline} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item_content: {
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
