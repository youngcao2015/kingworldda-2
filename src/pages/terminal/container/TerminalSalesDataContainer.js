/**
 * desc：终端销售数据
 * author：young
 * date： 2018/9/29
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TerminalSalesData from '../presenter/TerminalSalesData';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';
import * as api from '../../../constants/api';
import { getTerminalSalesData } from '../../../redux/terminal/actions';
import PropTypes from 'prop-types';

class TerminalSalesDataContainer extends Component {
    static componentName = 'TerminalSalesDataContainer';

    componentDidMount() {
        this._onRefresh();
    }

    _onRefresh = () => {
        this.props.getTerminalSalesData(
            api.BaseUrl,
            api.Terminal_CustomerList,
            null,
            'GET',
            true
        );
    };

    render() {
        return <TerminalSalesData {...this.props} onRefresh={this._onRefresh}/>;
    }
}

const mapStateToProps = state => ({
    isRefreshing: state.terminal.isRefreshing,
    terminalSalesData: state.terminal.terminalSalesData,
});

const mapDispatchToProps = dispatch => ({
    getTerminalSalesData: bindActionCreators(getTerminalSalesData, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TerminalSalesDataContainer);
