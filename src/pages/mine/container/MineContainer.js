/**
 * desc：MineContainer
 * author：young
 * date： 2018/8/23
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../../redux/user/actions';

import Mine from '../presenter/Mine';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';
import { http } from '../../../utils/request';
import * as api from '../../../constants/api';
import { Toast } from '../../../utils/Toast';
import fetch from '../../../lib/fetch-polyfill';

class MineContainer extends Component {
    static componentName = 'MineContainer';

    componentDidMount() {}

    _goMineSalesChart = () => {
        Actions.push(routeNames.MINE_SALES_CHART);
    };

    _logout = () => {
        this.props.logout(api.BaseUrl, api.USER_LOGOUT);
    };

    render() {
        return (
            <Mine {...this.props} goMineSalesChart={this._goMineSalesChart} logout={this._logout} />
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    logout: bindActionCreators(logout, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MineContainer);
