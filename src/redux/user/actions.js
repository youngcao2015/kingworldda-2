import { Platform, NativeModules, Alert } from 'react-native';

import * as types from '../types';
import { Toast } from '../../utils/Toast';
import * as routeNames from '../../constants/routeNames';
import { http } from '../../utils/request';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import Popup from '../../components/Popup';
import * as api from '../../constants/api';
import { store } from '../../root';


/*
* 登陆
* */
const login = (baseUrl, uri, params) => dispatch => {
    http(baseUrl, uri, params)
        .then(responseObj => {
            if (responseObj.success === true) {
                Toast.showMessage(responseObj.msg, 2000);
                dispatch(loginInfo(responseObj.body));

                Actions.push(routeNames.TabBar);
            } else {
                Toast.showMessage(responseObj.msg, 2000);
                dispatch(loginInfo({}));
            }
        })
        .catch(error => {
            Toast.showMessage('网络请求错误，请稍后再试！', 2000);
            dispatch(loginInfo({}));
        });
};

const loginInfo = info => ({
    type: types.LOGIN_INFO,
    loginInfo: info,
});

/*
*  版本检测
* */
const checkVersion = (baseUrl, uri) => dispatch => {
    http(baseUrl, uri, null, 'GET').then(
        responseObj => {
            if (responseObj.returnCode === '200') {
                dispatch(versionInfo(responseObj.result));

                const data = responseObj.result;
                if (Platform.OS === 'android') {
                    if (+data.versionCode > DeviceInfo.getBuildNumber()) {
                        Alert.alert('', '检测到有新版本，是否下载？', [
                            {
                                text: '取消',
                                style: 'cancel',
                            },
                            {
                                text: '确定',
                                onPress: () => {
                                    NativeModules.upgrade.upgrade(
                                        url + data.url
                                    );
                                },
                            },
                        ]);
                    }
                }
            } else {
                dispatch(versionInfo({}));
            }
        },
        () => {
            dispatch(versionInfo({}));
        }
    );
};

const versionInfo = info => ({
    type: types.VERSION_INFO,
    versionInfo: info,
});

/**
 * Logout
 */
const logout = (baseUrl, uri) => dispatch => {
    // todo 接口返回HTML，需要服务端调整
    const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'User-Agent': 'APP/MOBILE',
    });
    fetch(baseUrl + uri, {
        method: 'GET',
        headers: headers,
        credentials: 'include',
        timeout: 15 * 1000,
    }).then(res => {
        Toast.showMessage('退出成功！', 2000);
        Actions.reset(routeNames.Root);
    }).catch(error => {
        Toast.showMessage('网络请求异常，请稍后再试！', 2000);
    });
};

function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
    };
}

module.exports = {
    logout,
    login,
    checkVersion,
    addTodo,
};
