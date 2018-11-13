import React from 'react';
import { StyleSheet, Text, View, processColor } from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';
import * as chartStyles from '../styles/chart';

export default class StackedBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: {
                label: '',
                value: '',
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
                    barWidth: 0.7,
                },
            },
            // highlights: [{ x: 1, stackIndex: 0 }, { x: 2, stackIndex: 1 }],
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
                    chartDescription={this.state.description}
                    drawValueAboveBar={false}
                    visibleRange={{ x: { min: 1, max: 4 } }}
                    // marker={{
                    //     enabled: true,
                    //     markerColor: processColor("#F0C0FF8C"),
                    //     textColor: processColor("white"),
                    //     markerFontSize: 14
                    // }}
                    highlights={this.state.highlights}
                    onSelect={this.handleSelect}
                    onChange={event => console.log(event.nativeEvent)}
                />
            </View>
        );
    }
}

const styles = chartStyles.chart_cell;
