import React from 'react';
import { StyleSheet, Text, View, processColor, Dimensions } from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';
import * as chartStyles from '../styles/chart';

const { width, height } = Dimensions.get('window');

export default class SingleBarChart extends React.Component {
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
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5,
            },
            data: {
                dataSets: props.dataSets,

                config: {
                    barWidth: 0.7,
                },
            },
            // highlights: [{x: 3}, {x: 6}],
            xAxis: {
                valueFormatter: props.valueFormatter,
                granularityEnabled: true,
                granularity: 1,
                // drawLabels: false,
                drawAxisLine: false,
                drawGridLines: false,
                position: 'BOTTOM',
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

            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),
                // positionX: width,
                // positionY: 60,
            },
        };
    }

    handleSelect(event) {
        const entry = event.nativeEvent;

        this.setState({
            selectedEntry: entry,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>{this.props.title}</Text>
                </View>
                <View>
                    {!!this.state.selectedEntry.y && (
                        <Text>{`金额：${this.state.selectedEntry.y.toFixed(
                            2
                        )}元`}</Text>
                    )}
                </View>

                <BarChart
                    style={styles.chart}
                    data={this.state.data}
                    xAxis={this.state.xAxis}
                    yAxis={this.state.yAxis}
                    animation={{ durationX: 2000 }}
                    chartDescription={this.state.description}
                    // legend={this.state.legend}
                    gridBackgroundColor={processColor('#ffffff')}
                    visibleRange={{ x: { min: 1, max: 5 } }}
                    drawBarShadow={false}
                    drawValueAboveBar
                    drawHighlightArrow
                    onSelect={this.handleSelect.bind(this)}
                    // highlights={this.state.highlights}
                    // onChange={event => console.log(event.nativeEvent)}
                />
            </View>
        );
    }
}

const styles = chartStyles.chart_cell;
