/**
 * desc：终端分析图表
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
import { getSpecifiedColor } from '../../../utils/randomColors';
import StackedBarChart from './StackedBarChart';
import LineGroupBarChart from './LineGroupBarChart';

export default class TerminalAnalysis extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            terminalTypeRatioValues: [
                {
                    value: 30,
                    label: '重点/OTC',
                },
                { value: 27, label: '非重点/OTC' },
                {
                    value: 19,
                    label: '非重点/院线',
                },
            ],
            terminalTypeRatioTitle: '终端类型占比',

            terminalAmountRatioValues: [
                { value: 876666, label: '重点/OTC' },
                { value: 299877, label: '非重点/OTC' },
                { value: 152567, label: '非重点/院线' },
            ],
            terminalAmountRatioTitle: '各类终端销售额贡献比',

            terminalTypeAmountRatioValues: [
                { value: 676666, label: '个体店' },
                { value: 599877, label: '诊所' },
                { value: 252567, label: '连锁店' },
            ],
            terminalTypeAmountRatioTitle: '终端类型销售额占比',

            terminalAmountGoalRatioDataSets: [
                {
                    values: [
                        {
                            y: [577100, -36660],
                        },
                        { y: [615500, -120566] },
                        {
                            y: [336660, -26620],
                        },
                        { y: [666130, -115066] },
                        { y: [166620, -62660] },
                    ],
                    label: '',
                    config: {
                        colors: [
                            processColor('#f5994e'),
                            processColor('#E01F54'),
                        ],
                        stackLabels: ['销售额', '差值'],
                        valueTextColor: processColor('white'),
                    },
                },
            ],
            terminalAmountGoalRatioValueFormatter: [
                '宝鸡恒生堂',
                '杭州济仁堂',
                '安阳同仁堂',
                '宝鸡市惠人诊所',
                '洛阳协和大药房',
            ],
            terminalAmountGoalRatioTitle: '销售额及目标对比',
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <SinglePieChart
                        values={this.state.terminalTypeRatioValues}
                        title={this.state.terminalTypeRatioTitle}
                    />
                    <SinglePieChart
                        values={this.state.terminalAmountRatioValues}
                        title={this.state.terminalAmountRatioTitle}
                    />
                    <SinglePieChart
                        values={this.state.terminalTypeAmountRatioValues}
                        title={this.state.terminalTypeAmountRatioTitle}
                    />
                    <StackedBarChart
                        dataSets={this.state.terminalAmountGoalRatioDataSets}
                        valueFormatter={
                            this.state.terminalAmountGoalRatioValueFormatter
                        }
                        title={this.state.terminalAmountGoalRatioTitle}
                    />
                    <LineGroupBarChart />
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
