/**
 * desc：终端
 * author：young
 * date： 2018/8/22
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import { Toast } from '../../../utils/Toast';
import Item from '../../../components/Item';
import DefaultItem from '../../../components/DefaultItem';
import PropTypes from 'prop-types';
import TerminalAnalysisContainer from '../container/TerminalAnalysisContainer';
import Spacer from '../../../components/Spacer';

export default class Terminal extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static propTypes = {
        goInventorySaleRatio: PropTypes.func,
        goTerminalAnalysis: PropTypes.func,
        goTerminalSalesData: PropTypes.func,
    };

    _goInventorySaleRatio = () => {
        this.props.goInventorySaleRatio();
    };

    _goTerminalAnalysis = () => {
        this.props.goTerminalAnalysis();
    };

    _goTerminalSalesData = () => {
        this.props.goTerminalSalesData();
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ marginTop: 20 }}>
                    <DefaultItem
                    item={{
                    leftTitle: '存销比',
                    // leftImage: require('../img/data_small.png'),
                    }}
                    onPressItem={this._goInventorySaleRatio}
                    />
                    {/*<DefaultItem*/}
                    {/*item={{*/}
                    {/*leftTitle: '终端产品促销效果评估',*/}
                    {/*// leftImage: require('../img/chart_small.png'),*/}
                    {/*}}*/}
                    {/*// onPressItem={this._goAreaSalesChart}*/}
                    {/*/>*/}

                    {/*<Spacer size={20} />*/}

                    <DefaultItem
                        item={{
                            leftTitle: '终端销售数据',
                            // leftImage: require('../img/data_small.png'),
                        }}
                        onPressItem={this._goTerminalSalesData}
                    />

                    <Spacer size={20} />

                    <DefaultItem
                        item={{
                            leftTitle: '终端分析',
                            // leftImage: require('../img/chart_small.png'),
                        }}
                        onPressItem={this._goTerminalAnalysis}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});
