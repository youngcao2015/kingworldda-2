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
* 获取销售指标
* */
const getIndicatorsAndSales = (baseUrl, uri, params, method) => dispatch => {
    http(baseUrl, uri, params, method)
        .then(responseObj => {
            Toast.showMessage('数据加载完成！', 2000);
            dispatch(indicatorsAndSales(responseObj, false));
        })
        .catch(error => {
            Toast.showMessage('网络请求错误，请稍后再试!', 2000);
            dispatch(indicatorsAndSales({}, false));
        });
};

const updateLoadingState = loading => ({
    type: types.Mine_Sales_Loading_State,
    loading,
});

const indicatorsAndSales = (info, loading) => ({
    type: types.Mine_Indicators_Sales,
    indicatorsAndSales: info,
    loading
});

module.exports = {
    getIndicatorsAndSales,
    updateLoadingState
};
