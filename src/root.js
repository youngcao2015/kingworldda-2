/**
 * desc：项目的根组件
 * author：young
 * date：
 */

/* global __DEV__ */
import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// redux-socket.io  暂时使用 socket.io代替  之后有需要在使用这个
// import createSocketIoMiddleware from 'redux-socket.io';
// import io from 'socket.io-client';
// const socket = io('http://demo.g9999.cn:220/qsubscribe', {transport: 'websocket'});
// const socket = io('http://123.57.213.117:220/qsubscribe',{transport: 'websocket'});
// let socketIoMiddleware = createSocketIoMiddleware(socket);

// Consts and Libs
import App from './navigation/App';
// import Analytics from '@lib/analytics';
// All redux reducers (rolled into one mega-reducer)
import rootReducer from './redux/index';

// Load middleware
let middleware = [
    // Analytics,
    thunk, // Allows action creators to return functions (not just plain objects)
    // socketIoMiddleware
];
console.ignoredYellowBox = ['Setting a timer'];
if (__DEV__) {
    // Dev-only middleware
    middleware = [
        ...middleware,
        createLogger(), // Logs state changes to the dev console
    ];
}

// Init redux store (using the given reducer & middleware)
export const store = compose(applyMiddleware(...middleware))(createStore)(
    rootReducer
);

// Wrap App in Redux provider (makes Redux available to all sub-components)
export default function AppContainer() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
