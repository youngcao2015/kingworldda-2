/**
 * desc：片区终端销量
 * author：young
 * date： 2018/8/22
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
    Platform,
} from 'react-native';

import { Toast } from '../../../utils/Toast';
import { PieChart } from 'react-native-charts-wrapper';

const { width, height } = Dimensions.get('window');
import {
    getRandomColors,
    getSequentialColors,
} from '../../../utils/randomColors';
import * as chartStyles from '../styles/chart';

export default class SinglePieChart extends Component {
    // 构造
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: {
                label: '',
                value: '',
            },
            legend: {
                enabled: true,
                textSize: 15,
                // form: "CIRCLE",

                // horizontalAlignment: 'RIGHT',
                horizontalAlignment: 'CENTER',
                // verticalAlignment: 'TOP',
                verticalAlignment: 'BOTTOM',
                // orientation: "VERTICAL",
                wordWrapEnabled: true,
            },
            data: {
                dataSets: [
                    {
                        values: props.values,
                        label: '',
                        config: {
                            colors: getSequentialColors(props.values.length),
                            valueTextSize: 16,
                            valueTextColor: processColor('#1eade5'),
                            sliceSpace: 5,
                            selectionShift: 13,
                            xValuePosition: 'OUTSIDE_SLICE',
                            yValuePosition: 'OUTSIDE_SLICE',
                            valueFormatter: "#.##'%'",
                            valueLineColor: processColor('#1eade5'),
                            valueLinePart1Length: 0.5,
                        },
                    },
                ],
            },
            // highlights: [{ x: 2 }],
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
                <View>
                    {!!this.state.selectedEntry.label && (
                        <Text>
                            {`${this.state.selectedEntry.label}:${
                                this.state.selectedEntry.value
                            }`}
                        </Text>
                    )}
                </View>

                <PieChart
                    style={styles.chart}
                    logEnabled
                    // chartBackgroundColor={processColor('pink')}
                    chartDescription={this.state.description}
                    data={this.state.data}
                    legend={this.state.legend}
                    // highlights={this.state.highlights}
                    // entryLabelColor={processColor("green")}
                    // entryLabelTextSize={20}
                    drawEntryLabels={false}
                    rotationEnabled
                    rotationAngle={45}
                    usePercentValues
                    // styledCenterText={{
                    //   text: "片区终端销量",
                    //   color: processColor("pink"),
                    //   size: 20
                    // }}
                    centerTextRadiusPercent={100}
                    holeRadius={30}
                    holeColor={processColor('#f0f0f0')}
                    transparentCircleRadius={35}
                    transparentCircleColor={processColor('#f0f0f088')}
                    // maxAngle={350}
                    onSelect={this.handleSelect}
                    // onChange={event => console.log(event.nativeEvent)}
                />
            </View>
        );
    }
}

const styles = chartStyles.chart_cell;
