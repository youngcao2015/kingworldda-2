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
const getIndicators = (baseUrl, uri, params) => dispatch => {
    http(baseUrl, uri, params)
        .then(responseObj => {
            console.log(responseObj);
            // if (responseObj.success === true) {
            //     Toast.showMessage(responseObj.msg, 2000);
            //     dispatch(indicators(responseObj.body));
            //
            //     Actions.push(routeNames.TabBar);
            // } else {
            //     Toast.showMessage(responseObj.msg, 2000);
            //     dispatch(indicators({}));
            // }
        })
        .catch(error => {
            Toast.showMessage('网络请求错误，请稍后再试！', 2000);
            dispatch(indicators({}));
        });
};

const indicators = info => ({
    type: types.INDICATORS,
    indicators: info,
});

module.exports = {
    getIndicators,
};
