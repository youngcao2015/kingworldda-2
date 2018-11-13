/**
 * Created by xudong on 02/03/2017.
 */

import React, { Component } from "react";
import { View, Text, StyleSheet, processColor } from "react-native";

import { CombinedChart } from "react-native-charts-wrapper";
import * as chartStyles from "../styles/chart";
import { getSpecifiedColor } from "../../../utils/randomColors";

export default class LineGroupBarChart extends Component {
    constructor(props) {
        super(props);

        let barCount = 2;
        let groupSpace = 0.3;
        let barSpace = 0.1;
        let barWidth = (1 - groupSpace) / barCount - barSpace;


        let xAxisValueFormatter = [
            "安阳市",
            "常州市",
            "无锡市",
            "宝鸡市",
            "洛阳市",
            "杭州市"
        ];
        let groupBarDataValues1 = [
            227222.8,
            56677,
            55678,
            356778,
            445627,
            445267
        ];
        let groupBarDataValues2 = [
            456677,
            535966,
            666650,
            666239,
            988779,
            445267
        ];
        let lineDataValues = [];
        for (let i = 0; i < groupBarDataValues1.length; i++) {
            lineDataValues[i] = (groupBarDataValues1[i] / groupBarDataValues2[i]) * 100;
        }

        this.state = {
            xAxis: {
                valueFormatter: xAxisValueFormatter,
                granularityEnabled: true,
                granularity: 1,
                // drawLabels: false,
                drawAxisLine: false,
                drawGridLines: false,
                position: "BOTTOM",
                axisMaximum: xAxisValueFormatter.length - 0.5,
                axisMinimum: 0 - 0.5
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
                        lineWidth: 1
                    }
                },
                right: {
                    enabled: false
                }
            },
            marker: {
                enabled: true,
                markerColor: processColor("#F0C0FF8C"),
                textColor: processColor("white"),
                markerFontSize: 14
            },
            description: {
                text: "",
                textSize: 15,
                textColor: processColor("darkgray")
                // positionX: width,
                // positionY: 60,
            },
            data: {
                barData: {
                    dataSets: [
                        {
                            values: groupBarDataValues1,
                            label: "终端销量",
                            config: {
                                drawValues: false,
                                colors: getSpecifiedColor(9)
                            }
                        },
                        {
                            values: groupBarDataValues2,
                            label: "终端销售目标",
                            config: {
                                drawValues: false,
                                colors: getSpecifiedColor(1)
                            }
                        }
                    ],
                    config: {
                        barWidth: barWidth,
                        group: {
                            fromX: -0.5,
                            groupSpace: groupSpace,
                            barSpace: barSpace
                        }
                    }
                },
                lineData: {
                    dataSets: [
                        {
                            values: lineDataValues,
                            label: "目标完成比",

                            config: {
                                drawValues: true,
                                colors: [processColor("#2ec7c9")],
                                mode: "CUBIC_BEZIER",
                                drawCircles: true,
                                lineWidth: 2,
                                axisDependency: "right",
                                valueFormatter: "#.##'%'",
                                spaceMin: 0.2
                            }
                        }
                    ]
                }
            }
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent;
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null });
        } else {
            this.setState({
                ...this.state,
                selectedEntry: JSON.stringify(entry)
            });
        }

        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    {/*<Text>{this.props.title}</Text>*/}
                    <Text>{'目标完成比'}</Text>
                </View>

                <CombinedChart
                    style={styles.chart}
                    data={this.state.data}
                    xAxis={this.state.xAxis}
                    yAxis={this.state.yAxis}
                    onSelect={this.handleSelect.bind(this)}
                    onChange={event => {
                    }}
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
