/**
 * desc：AreaContainer
 * author：young
 * date： 2018/8/23
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIndicators } from '../../../redux/area/actions';

import Area from '../presenter/Area';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';
import * as api from '../../../constants/api';

class AreaContainer extends Component {
    static componentName = 'AreaContainer';

    componentDidMount() {
    }

    _goAreaSalesStatistics = () => {
        Actions.push(routeNames.AREA_SALES_STATISTICS);
    };

    _goAreaSalesChart = () => {
        Actions.push(routeNames.AREA_SALES_CHART);
    };

    render() {
        return (
            <Area
                {...this.props}
                goAreaSalesStatistics={this._goAreaSalesStatistics}
                goAreaSalesChart={this._goAreaSalesChart}
            />
        );
    }
}

const mapStateToProps = state => ({
    indicators: state.area.indicators,
});

const mapDispatchToProps = dispatch => ({
    getIndicators: bindActionCreators(getIndicators, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AreaContainer);
