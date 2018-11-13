/**
 * desc：存销比分析
 * author：young
 * date： 2018/10/16
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import InventorySaleRatioItem from './InventorySaleRatioItem';

export default class InventorySaleRatio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            isRefreshing: true,
        };
    }

    componentDidMount() {
        this.requestList();
    }

    _onPressItem = item => {
        console.log(item);
    };

    _renderItem = ({ item, index }) => (
        <InventorySaleRatioItem
            item={item}
            index={index}
            onPressItem={item => this._onPressItem(item)}
        />
    );

    _keyExtractor = (item, index) => index.toString();

    _onRefresh = () => {
        this.setState(
            {
                isRefreshing: true,
            },
            () => this.requestList()
        );
    };

    requestList = () => {
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
                list: [
                    { name: '赤峰市康泰大药房', ratio: 99.71 },
                    {
                        name: '安阳市众生大药房',
                        ratio: 99.65,
                    },
                    {
                        name: '安阳市紫薇大药房有限责任公司',
                        ratio: 99.28,
                    },
                    { name: '百信源大药房', ratio: 98.81 },
                    { name: '常州同仁堂', ratio: 98.52 },
                    { name: '同济健康门诊', ratio: 97.85 },
                    { name: '赤峰市康泰大药房', ratio: 99.71 },
                    {
                        name: '安阳市众生大药房',
                        ratio: 99.65,
                    },
                    {
                        name: '安阳市紫薇大药房有限责任公司',
                        ratio: 99.28,
                    },
                    { name: '百信源大药房', ratio: 98.81 },
                    { name: '常州同仁堂', ratio: 98.52 },
                    { name: '同济健康门诊', ratio: 97.85 },
                    { name: '赤峰市康泰大药房', ratio: 99.71 },
                    {
                        name: '安阳市众生大药房',
                        ratio: 99.65,
                    },
                    {
                        name: '安阳市紫薇大药房有限责任公司',
                        ratio: 99.28,
                    },
                    { name: '百信源大药房', ratio: 98.81 },
                    { name: '常州同仁堂', ratio: 98.52 },
                    { name: '同济健康门诊', ratio: 97.85 },
                ],
            });
        }, 0);
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    renderItem={this._renderItem}
                    data={this.state.list}
                    keyExtractor={this._keyExtractor}
                    refreshing={this.state.isRefreshing}
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
});
