import { Platform, NativeModules, Alert } from 'react-native';

import * as types from '../types';
import { Toast } from '../../utils/Toast';
import * as routeNames from '../../constants/routeNames';
import { http } from '../../utils/request';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import Popup from '../../components/Popup';
import * as api from '../../constants/api';

/*
* 获取终端销售数据
* */
const getTerminalSalesData = (baseUrl, uri, params, method, isRefreshing) => dispatch => {
    dispatch(fetchTerminalSalesData(isRefreshing));
    http(baseUrl, uri, params, method)
        .then(responseObj => {
            Toast.showMessage('数据加载成功', 2000);
            dispatch(receiveTerminalSalesData(responseObj, false));
        })
        .catch(error => {
            Toast.showMessage('系统错误，请稍后再试！', 2000);
            dispatch(receiveTerminalSalesData({}, false));
        });
};

/**
 * 用于修改网络请求状态--网络请求前
 *
 * @param isRefreshing
 * @returns {{type: string, isRefreshing: *}}
 */
const fetchTerminalSalesData = (isRefreshing) => ({
    type: types.Fetch_Terminal_Sales_Data,
    isRefreshing
});

/**
 * 接收到数据后
 *
 * @param info
 * @param isRefreshing
 * @returns {{type: string, terminalSalesData: *, isRefreshing: *}}
 */
const receiveTerminalSalesData = (info, isRefreshing) => ({
    type: types.Receive_Terminal_Sales_Data,
    terminalSalesData: info,
    isRefreshing
});

module.exports = {
    getTerminalSalesData,
};
