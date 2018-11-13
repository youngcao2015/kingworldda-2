/**
 * desc：片区销售图表
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    processColor,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';

import { Toast } from '../../../utils/Toast';
import SinglePieChart from './SinglePieChart';
import SingleBarChart from './SingleBarChart';
import GroupBarChart from './GroupBarChart';
import { getSpecifiedColor } from '../../../utils/randomColors';

export default class AreaSalesChart extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            productTerminalSalesValues: [
                {
                    value: 41475,
                    label: '京都蜜炼川贝枇杷膏150毫升',
                },
                { value: 34975, label: '京都蜜炼川贝枇杷膏75毫升' },
                {
                    value: 37053,
                    label: '京都蜜炼川贝枇杷膏300毫升',
                },
            ],
            productTerminalSalesTitle: '产品终端销量占比  (单位：瓶)',

            areaTerminalSalesValues: [
                { value: 45, label: '西安片区' },
                { value: 21, label: '安阳片区' },
                { value: 15, label: '无锡片区' },
                { value: 22, label: '杭州片区' },
                { value: 15, label: '呼和浩特片区' },
            ],
            areaTerminalSalesTitle: '片区终端销量  (单位：千)',

            areaSellScheduleDataSets: [
                {
                    values: [{ y: 60000.5 }, { y: 80000 }, { y: 100000.88 }],
                    label: '金额',
                    config: {
                        color: getSpecifiedColor(0)[0],
                        barShadowColor: processColor('lightgray'),
                        highlightAlpha: 90,
                        highlightColor: processColor('green'),
                        valueFormatter: '#.##',
                    },
                },
            ],
            areaSellScheduleValueFormatter: ['已完成', '已回款', '销售目标'],
            areaSellScheduleTitle: '片区销售目标  (单位：元)',

            sellerSalesDataSets: [
                {
                    values: [
                        22222.8,
                        56677,
                        55678,
                        356778,
                        44567,
                        56667,
                        55678,
                        356778,
                    ],
                    label: '已完成',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(0),
                    },
                },
                {
                    values: [
                        45677,
                        53566,
                        666650,
                        66623,
                        988779,
                        988756,
                        55678,
                        356778,
                    ],
                    label: '已回款',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(1),
                    },
                },
                {
                    values: [
                        10333,
                        55455,
                        66635,
                        666690,
                        866662,
                        866698,
                        55678,
                        356778,
                    ],
                    label: '销售目标',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(2),
                    },
                },
            ],
            sellerSalesValueFormatter: [
                '黄林芳',
                '万家立',
                '马娜娜',
                '杜文艳',
                '张三',
                '李四',
                '王五',
                '马六',
            ],
            sellerSalesTitle: '业务人员销售额  (单位：元)',

            productCitySalesSets: [
                {
                    values: [227222.8, 56677, 55678, 356778, 445627, 445267],
                    label: '京都蜜炼川贝枇杷膏75毫升',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(2),
                    },
                },
                {
                    values: [456677, 535966, 666650, 66623, 988779, 445267],
                    label: '京都蜜炼川贝枇杷膏150毫升',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(3),
                    },
                },
                // {
                //     values: [10333, 55455, 66635, 666690, 866662],
                //     label: '京都蜜炼川贝枇杷膏300毫升',
                //     config: {
                //         drawValues: false,
                //         colors: getSpecifiedColor(4),
                //     },
                // },
                Object.assign(
                    {},
                    {
                        values: [510333, 555455, 66635, 666690, 866662, 445267],
                        label: '京都蜜炼川贝枇杷膏300毫升',
                    },
                    {
                        config: {
                            drawValues: false,
                            colors: getSpecifiedColor(4),
                        },
                    }
                ),
            ],
            productCitySalesValueFormatter: [
                '安阳片区',
                '西安片区',
                '无锡片区',
                '杭州片区',
                '呼和浩特片区',
                '深圳片区',
            ],
            productCitySalesTitle: '产品城市销售额分布  (单位：元)',
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <SinglePieChart
                        values={this.state.areaTerminalSalesValues}
                        title={this.state.areaTerminalSalesTitle}
                    />
                    <SinglePieChart
                        values={this.state.productTerminalSalesValues}
                        title={this.state.productTerminalSalesTitle}
                    />
                    <SingleBarChart
                        dataSets={this.state.areaSellScheduleDataSets}
                        valueFormatter={
                            this.state.areaSellScheduleValueFormatter
                        }
                        title={this.state.areaSellScheduleTitle}
                    />
                    <GroupBarChart
                        dataSets={this.state.sellerSalesDataSets}
                        valueFormatter={this.state.sellerSalesValueFormatter}
                        title={this.state.sellerSalesTitle}
                    />
                    <GroupBarChart
                        dataSets={this.state.productCitySalesSets}
                        valueFormatter={
                            this.state.productCitySalesValueFormatter
                        }
                        title={this.state.productCitySalesTitle}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
