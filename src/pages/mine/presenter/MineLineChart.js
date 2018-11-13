/**
 * Created by xudong on 02/03/2017.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, processColor } from 'react-native';

import { CombinedChart, LineChart } from 'react-native-charts-wrapper';
import * as chartStyles from '../styles/chart';
import { getSpecifiedColor } from '../../../utils/randomColors';

export default class MineLineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xAxis: {
                valueFormatter: props.valueFormatter,
                granularityEnabled: true,
                granularity: 1,
                // drawLabels: false,
                drawAxisLine: true,
                drawGridLines: false,
                position: 'BOTTOM',
                axisMaximum: props.valueFormatter.length + 0.5,
                axisMinimum: 0 - 0.5,
            },
            yAxis: {
                left: {
                    // drawLabels: false,
                    // drawAxisLine: false,
                    // drawGridLines: false,
                    granularityEnabled: true,
                    granularity: 1,
                    zeroLine: {
                        enabled: true,
                        lineWidth: 1,
                    },
                },
                right: {
                    enabled: false,
                },
            },
            marker: {
                enabled: true,
                markerColor: processColor('#F0C0FF8C'),
                textColor: processColor('white'),
                markerFontSize: 14,
            },
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),
                // positionX: width,
                // positionY: 60,
            },
            data: {
                dataSets: props.dataSets,
            },
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>{this.props.title}</Text>
                </View>

                <LineChart
                    style={styles.chart}
                    data={this.state.data}
                    xAxis={this.state.xAxis}
                    yAxis={this.state.yAxis}
                    marker={this.state.marker}
                    highlights={this.state.highlights}
                    visibleRange={{ x: { min: 1, max: 4 } }}
                    chartDescription={this.state.description}
                />
            </View>
        );
    }
}

const styles = chartStyles.chart_cell;
