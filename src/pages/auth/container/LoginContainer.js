/**
 * desc：LoginContainer
 * author：young
 * date： 2018/8/23
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, checkVersion } from "../../../redux/user/actions";

import Login from "../presenter/Login";
import * as api from "../../../constants/api";
import { DeviceEventEmitter } from "react-native";
import { http } from "../../../utils/request";
import { Toast } from "../../../utils/Toast";
import * as routeNames from "../../../constants/routeNames";
import DateUtils from "../../../utils/dateUtils";
import ErrorPrams from "../../../utils/errorPrams";

const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

let that = null;

class LoginContainer extends Component {
    static componentName = "LoginContainer";

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        that = this;
    }

    componentDidMount() {
        // const url = 'https://www.kw1996.com';
        // this.props.checkVersion(url, api.CHECK_VERSION);

        this.props.checkVersion(api.BaseUrl, api.CHECK_VERSION);

        // this._test();
        // this._test2();

        this.getGithubData().then(res => {
            console.log('response: ' + res);
        }).catch(error => {
            console.log('error: ' + error);
        });
    }

    getGithubData = async () => {
        try {
            const url = "https://api.github.com/users/github";
            const result = await fetch(url).then(res => res.json());
            return await result.bio;
        } catch (e) {
            return e;
        }
    };

    helloWorldGenerator = function* () {
        // 如果一次执行多个yield表达式：出现异步函数，无法等待其执行完毕

        console.log("第一步");
        yield "hello";

        console.log("第二步");
        yield "world";

        console.log("第三步");
        yield that.asyncFunc();

        console.log("第四步");
        return "ending";
    };

    asyncFunc = () => {
        setTimeout(params => {
            console.log("timeout execute finished");
        }, 1000);
    };

    _test2 = () => {
        var hw = this.helloWorldGenerator();
        for (let it of hw) {

        }
    };

    getData = async () => {
        return ("async test");
    };

    _test = async () => {
        const agePromise = new Promise(function(resolve, reject) {
            // ... some code
            let age = randomNum(1, 36);
            if (age < 18) {
                resolve(age);
            } else {
                reject("error: age bigger than 18");
            }
        });

        const namePromise = new Promise((resolve, reject) => {
            let name = "young";
            if (name === "young") {
                resolve(name);
            } else {
                reject("error: anyone else");
            }
        });

        let promises = [agePromise, namePromise];
        const promisesAll = Promise.all(promises);
        const promisesRace = Promise.race(promises);

        promisesRace.then(res => {
            console.log("promisesRace: " + res);
        }).catch(error => {
            console.log("promisesRace: " + error);
        });

        promisesAll.then(res => {
            console.log("promisesAll: " + res);
        }).catch(error => {
            console.log("promisesAll: " + error);
        });

        let values = await this.getData();
        // console.log(values);
        console.log(this.getData());

        // ========= rollback 2 =========
    };

    onLogin = login => {
        const params = {
            username: login.username,
            password: login.password
            // mobileLogin: true,
        };
        this.props.login(api.BaseUrl, api.USER_LOGIN, params);
    };

    render() {
        return <Login {...this.props} onLogin={this.onLogin}/>;
    }
}

const mapStateToProps = state => ({
    name: state.user.loginInfo.name,
    username: state.user.loginInfo.username,
    versionCode: state.user.versionInfo.versionCode
});

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch),
    checkVersion: bindActionCreators(checkVersion, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
