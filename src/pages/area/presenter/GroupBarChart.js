import React from 'react';
import { StyleSheet, Text, View, processColor, Dimensions } from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';
import {
    getRandomColors,
    getSequentialColors,
    getSpecifiedColor,
} from '../../../utils/randomColors';
import * as chartStyles from '../styles/chart';

const { width, height } = Dimensions.get('window');

export default class GroupBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: {
                y: '',
            },
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true,
            },
            data: {
                dataSets: props.dataSets,
                config: {
                    barWidth: 0.2,
                    group: {
                        fromX: 0,
                        groupSpace: 0.1,
                        barSpace: 0.1,
                    },
                },
            },
            xAxis: {
                valueFormatter: props.valueFormatter,
                granularityEnabled: true,
                granularity: 1,
                axisMaximum: props.valueFormatter.length,
                axisMinimum: 0,
                centerAxisLabels: true,
                position: 'BOTTOM',
                drawAxisLine: false,
                drawGridLines: false,
            },
            yAxis: {
                left: {
                    // drawLabels: false,
                    // drawAxisLine: false,
                    drawGridLines: false,
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
                textColor: processColor('#1eade5'),
                markerFontSize: 14,
            },
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),
                // positionX: width,
                // positionY: 60,
            },
        };
    }

    componentDidMount() {
        // in this example, there are line, bar, candle, scatter, bubble in this combined chart.
        // according to MpAndroidChart, the default data sequence is line, bar, scatter, candle, bubble.
        // so 4 should be used as dataIndex to highlight bubble data.
        // if there is only bar, bubble in this combined chart.
        // 1 should be used as dataIndex to highlight bubble data.
        // this.setState({...this.state, highlights: [{x: 3},]})
    }

    handleSelect = event => {
        const entry = event.nativeEvent;

        this.setState({
            selectedEntry: entry,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>{this.props.title}</Text>
                </View>

                <BarChart
                    style={styles.chart}
                    xAxis={this.state.xAxis}
                    yAxis={this.state.yAxis}
                    data={this.state.data}
                    legend={this.state.legend}
                    drawValueAboveBar={false}
                    onSelect={this.handleSelect}
                    // onChange={event => console.log(event.nativeEvent)}
                    highlights={this.state.highlights}
                    marker={this.state.marker}
                    visibleRange={{ x: { min: 1, max: 5 } }}
                    chartDescription={this.state.description}
                />
            </View>
        );
    }
}

const styles = chartStyles.chart_cell;
