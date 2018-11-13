/**
 * desc：首页
 * author：young
 * date： 2018/8/22
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import DefaultItem from '../../../components/DefaultItem';
import PropTypes from 'prop-types';
import Spacer from "../../../components/Spacer";

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        goMineSalesChart: PropTypes.func,
        logout: PropTypes.func,
    };

    _goMineSalesChart = () => {
        this.props.goMineSalesChart();
    };

    _logout = () => {
        this.props.logout();
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ marginTop: 20 }}>
                    <DefaultItem
                        item={{
                            leftTitle: '我的销售',
                            leftImage: require('../img/chart_small.png'),
                        }}
                        onPressItem={this._goMineSalesChart}
                    />

                    <Spacer/>
                    <Spacer/>
                    <DefaultItem
                        item={{
                            leftTitle: '        退出登录',
                            // leftImage: require('../img/chart_small.png'),
                        }}
                        onPressItem={this._logout}
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
