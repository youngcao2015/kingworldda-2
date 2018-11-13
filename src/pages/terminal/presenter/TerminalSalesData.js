/**
 * desc：终端销售数据
 * author：young
 * date： 2018/9/29
 */
/**
 * desc：终端
 * author：young
 * date： 2018/8/22
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Toast } from '../../../utils/Toast';
import TerminalSalesData from './TerminalSalesData';
import SalesDataItem from './SalesDataItem';

export default class AreaSalesData extends Component {

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps !== this.props) {
    //         if (Array.isArray(nextProps.terminalSalesData)) {
    //             this.setState({
    //                 isRefreshing: false,
    //                 list: nextProps.terminalSalesData,
    //             });
    //         }
    //     }
    // }

    // _onPressItem = item => {
    //     // console.log(item);
    // };

    _renderItem = ({ item, index }) => (
        <SalesDataItem
            item={item}
            index={index}
            // onPressItem={item => this._onPressItem(item)}
        />
    );

    _keyExtractor = (item, index) => index.toString();

    _onRefresh = () => {
        this.props.onRefresh();
    };

    render() {
        return (
            <View style={styles.container}>
                {
                    !this.props.isRefreshing && !this.props.terminalSalesData.length &&
                    <View style={styles.tips}>
                        <Text style={{ fontSize: 26 }}>终端数据为空！</Text>
                    </View>
                }
                <FlatList
                    renderItem={this._renderItem}
                    data={this.props.terminalSalesData}
                    keyExtractor={this._keyExtractor}
                    refreshing={this.props.isRefreshing}
                    onRefresh={this._onRefresh}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tips: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
