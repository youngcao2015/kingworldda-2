/**
 * desc：片区销售统计
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AreaSalesStatistics from '../presenter/AreaSalesStatistics';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';

class AreaSalesStatisticsContainer extends Component {
    static componentName = 'AreaSalesStatisticsContainer';

    componentDidMount() {}

    render() {
        return <AreaSalesStatistics {...this.props} />;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AreaSalesStatisticsContainer);
