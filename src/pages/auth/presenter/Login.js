/**
 * desc：登录
 * author：young
 * date： 2018/8/22
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    DeviceEventEmitter,
    Image,
    TextInput,
} from 'react-native';

import { RkButton, RkTextInput } from 'react-native-ui-kitten';
import Button from 'apsl-react-native-button';
import { AppColors } from '../../../theme';
import * as Keychain from 'react-native-keychain';
import SplashScreen from 'react-native-splash-screen';

const appName = 'kingworldda';
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {},
        };

        this.username = '';
        this.password = '';
    }

    componentDidMount() {
        this.getUsernameAndPassword().then(response => {
            this.setState({
                auth: response,
            });

            this.username = response.username;
            this.password = response.password;
        });

        SplashScreen.hide();
    }

    saveUsernameAndPassword = async (username, password) => {
        Keychain.setInternetCredentials(appName, username, password).done();
    };

    getUsernameAndPassword = async () =>
        await Keychain.getInternetCredentials(appName);

    onLogin = () => {
        this.props.onLogin({
            username: this.username,
            password: this.password,
        });

        if (
            this.username &&
            this.password &&
            this.username.length &&
            this.password.length
        ) {
            this.saveUsernameAndPassword(this.username, this.password).done();
        }
    };

    onPassword = text => {
        this.password = text;
    };

    onUsername = text => {
        this.username = text;
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../img/logo.png')}
                />

                <View style={styles.login_input}>
                    <RkTextInput
                        label={
                            <Image
                                style={styles.user_icon}
                                source={require('../img/user.png')}
                            />
                        }
                        placeholder="请输入用户名"
                        defaultValue={this.state.auth.username}
                        style={styles.text_input}
                        inputStyle={{ paddingVertical: 0 }}
                        onChangeText={this.onUsername}
                    />

                    <RkTextInput
                        label={
                            <Image
                                style={styles.password_icon}
                                source={require('../img/password.png')}
                            />
                        }
                        placeholder="请输入密码"
                        style={styles.text_input}
                        inputStyle={{ paddingVertical: 0 }}
                        onChangeText={this.onPassword}
                        secureTextEntry
                        defaultValue={this.state.auth.password}
                    />
                </View>

                <Button
                    title={'登录'}
                    onPress={this.onLogin}
                    style={styles.login_btn}
                    textStyle={{ color: AppColors.white, fontSize: 18 }}
                >
                    登录
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    login_input: {
        marginTop: 100,
    },
    text_input: {
        margin: 20,
        paddingVertical: 0,
    },
    login_btn: {
        margin: 20,
        borderRadius: 3,
        backgroundColor: AppColors.blue,
        borderColor: AppColors.blue,
    },
    logo: {
        width: 72,
        height: 72,
        marginTop: 64,
        alignSelf: 'center',
    },
    user_icon: {
        width: 24,
        height: 24,
        margin: 5,
    },
    password_icon: {
        width: 20,
        height: 24,
        margin: 5,
        marginRight: 9,
    },
});
