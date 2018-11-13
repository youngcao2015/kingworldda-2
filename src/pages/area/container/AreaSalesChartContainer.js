/**
 * desc：片区销售图表
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AreaSalesChart from '../presenter/AreaSalesChart';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';

class AreaSalesChartContainer extends Component {
    static componentName = 'AreaSalesChartContainer';

    componentDidMount() {}

    render() {
        return <AreaSalesChart {...this.props} />;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AreaSalesChartContainer);
