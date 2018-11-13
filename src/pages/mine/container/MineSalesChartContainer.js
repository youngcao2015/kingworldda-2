/**
 * desc：我的销售容器
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MineSalesChart from '../presenter/MineSalesChart';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';
import * as api from '../../../constants/api';
import { getIndicatorsAndSales, updateLoadingState } from '../../../redux/mine/actions';

class MineSalesChartContainer extends Component {
    static componentName = 'MineSalesChartContainer';

    componentDidMount() {
        let params = {
            startDate: '2018-05-01',
            endDate: '2018-09-01',
        };
        this.props.getIndicatorsAndSales(
            api.BaseUrl,
            api.User_PeopleList,
            params,
            'GET'
        );
    }

    render() {
        return <MineSalesChart {...this.props} />;
    }
}

const mapStateToProps = state => ({
    indicators: state.mine.indiscators,
    sales: state.mine.salesVolume,
    loading: state.mine.loading,
});

const mapDispatchToProps = dispatch => ({
    getIndicatorsAndSales: bindActionCreators(getIndicatorsAndSales, dispatch),
    updateLoadingState: bindActionCreators(updateLoadingState, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MineSalesChartContainer);
