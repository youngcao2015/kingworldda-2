/**
 * desc：片区销售统计
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AreaSalesStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {};

    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <ItemContent
                    title={'总销售额'}
                    number={1472008.91}
                    percent={22.68}
                    status={'+'}
                />
                <ItemContent
                    title={'经销商销售数量'}
                    number={64296}
                    percent={18.17}
                    status={'+'}
                />
                <ItemContent
                    title={'终端销售数量'}
                    number={61572}
                    percent={18.57}
                    status={'+'}
                />
            </View>
        );
    }
}

const ItemContent = ({ title, number, percent, status = '+' }) => (
    <View>
        <View style={styles.item_content}>
            <Text>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text>{number}</Text>
                <Text> (</Text>
                <Text style={{ color: 'green' }}>{`${status}${percent}%`}</Text>
                <Text>)</Text>
            </View>
        </View>
        <View style={styles.item_underline} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
