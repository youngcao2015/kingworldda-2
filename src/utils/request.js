import fetch from '../lib/fetch-polyfill';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { Toast } from './Toast';
import { store } from "../root";

const http = (baseUrl, uri, params, method = 'POST') => {
    // 添加cookie;
    const user = store.getState().user;
    let cookie = '';
    if (typeof user !== 'undefined' && typeof user.loginInfo !== 'undefined' && typeof user.loginInfo.JSESSIONID !== 'undefined') {
        cookie = `JSESSIONID=${user.loginInfo.JSESSIONID}`;
    }

    const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'User-Agent': 'APP/MOBILE',
    });

    let formBody = [];
    if (params) {
        for (let p in params) {
            if (Object.prototype.hasOwnProperty.call(params, p)) {
                let encodedKey = encodeURIComponent(p);
                let encodedValue = encodeURIComponent(params[p]);
                formBody.push(`${encodedKey}=${encodedValue}`);
            }
        }
    }
    formBody = formBody.join('&');

    const mobileParams = '__ajax=true&mobileLogin=true';
    let URL = `${baseUrl}${uri}?${mobileParams}`;
    if (cookie.length) {
        URL = `${baseUrl}${uri};${cookie}?${mobileParams}`;
    }
    if (method === 'GET') {
        let temp_url = params ? `${URL}&${formBody}` : URL;
        return fetch(temp_url, {
            method: 'GET',
            headers: headers,
            credentials: 'include',
            timeout: 15 * 1000,
        }).then(res => res.json());
    } else {
        return fetch(URL, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: formBody,
            timeout: 15 * 1000,
        }).then(res => res.json());
    }
};

module.exports = {
    http,
};
