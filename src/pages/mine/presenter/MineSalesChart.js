/**
 * desc：我的销售--图表分析
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
import GroupBarChart from './GroupBarChart';
import { getSpecifiedColor } from '../../../utils/randomColors';
import MineLineChart from './MineLineChart';
import DateUtils from '../../../utils/dateUtils';

export default class MineSalesChart extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sellerSalesDataSets: [
                {
                    values: [],
                    label: '已完成',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(0),
                    },
                },
                {
                    values: [],
                    label: '销售目标',
                    config: {
                        drawValues: false,
                        colors: getSpecifiedColor(1),
                    },
                },
            ],
            sellerSalesValueFormatter: [],
            sellerSalesTitle: '我的销售额  (单位：元)',

            saleGoalRatioDataSets: [
                {
                    values: [12, 33],
                    label: '目标完成比',

                    config: {
                        drawValues: true,
                        colors: [processColor('#2ec7c9')],
                        mode: 'CUBIC_BEZIER',
                        drawCircles: true,
                        lineWidth: 2,
                        axisDependency: 'right',
                        valueFormatter: "#.##'%'",
                        spaceMin: 0.2,
                        spaceMax: 1,
                    },
                },
            ],
            saleGoalRatioValueFormatter: ['01', '02'],
            saleGoalRatioTitle: '目标完成比',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps !== this.props &&
            typeof nextProps.indicators === 'object'
        ) {
            let sellerSalesValueFormatter = [];
            let completedSales = [];
            let goalSales = [];
            let saleGoalRatio = [];

            if (Array.isArray(nextProps.sales)) {
                for (let i = 0; i < nextProps.sales.length; i++) {
                    sellerSalesValueFormatter[i] = DateUtils.mapMonth(
                        nextProps.sales[i].month
                    );
                    completedSales[i] = nextProps.sales[i].sumMoney;
                    goalSales[i] = nextProps.indicators[i].sumMoney;
                    saleGoalRatio[i] =
                        (+nextProps.sales[i].sumMoney /
                            +nextProps.indicators[i].sumMoney) *
                        100;
                }
            }

            this.setState({
                sellerSalesValueFormatter: sellerSalesValueFormatter,
                sellerSalesDataSets: [
                    {
                        values: completedSales,
                        label: '已完成',
                        config: {
                            drawValues: false,
                            colors: getSpecifiedColor(0),
                        },
                    },
                    {
                        values: goalSales,
                        label: '销售目标',
                        config: {
                            drawValues: false,
                            colors: getSpecifiedColor(1),
                        },
                    },
                ],

                saleGoalRatioDataSets: [
                    {
                        values: saleGoalRatio,
                        label: '目标完成比',

                        config: {
                            drawValues: true,
                            colors: [processColor('#2ec7c9')],
                            mode: 'CUBIC_BEZIER',
                            drawCircles: true,
                            lineWidth: 2,
                            axisDependency: 'right',
                            valueFormatter: "#.##'%'",
                            spaceMin: 0.2,
                            spaceMax: 1,
                        },
                    },
                ],
                saleGoalRatioValueFormatter: sellerSalesValueFormatter,
            });
        }
    }

    componentWillUnmount() {
        this.props.updateLoadingState(true);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {!!this.state.sellerSalesValueFormatter.length ? null : (
                    <View style={styles.tips}>
                        <Text>{this.props.loading ? '数据加载中，请稍后！' : '销售数据为空！'}</Text>
                    </View>
                )}
                <ScrollView>
                    {!!this.state.sellerSalesValueFormatter.length && (
                        <GroupBarChart
                            dataSets={this.state.sellerSalesDataSets}
                            valueFormatter={
                                this.state.sellerSalesValueFormatter
                            }
                            title={this.state.sellerSalesTitle}
                        />
                    )}
                    {!!this.state.sellerSalesValueFormatter.length && (
                        <MineLineChart
                            dataSets={this.state.saleGoalRatioDataSets}
                            valueFormatter={
                                this.state.saleGoalRatioValueFormatter
                            }
                            title={this.state.saleGoalRatioTitle}
                        />
                    )}
                </ScrollView>
            </SafeAreaView>
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
