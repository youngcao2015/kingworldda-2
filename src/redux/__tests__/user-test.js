import store from 'react-native-simple-store';
import * as userActions from '../user/actions';
import * as api from '../../constants/api';
import * as types from '../types';

/**
 * 在 RN 中，fetch 使用的是 whatwg-fetch，并且 XMLHttpRequest 是在底层 自己封装的。
 * 在 Jest 中无法使用，Jest 执行环境是 Nodejs，所以还需要 mock 一下。
 */
import nodeFetch from 'node-fetch';

/* global expect */
describe('redux user tests', () => {
    it('fetch test for react-native', () => {
        expect(nodeFetch('http://www.baidu.com')).not.toBeNull();
    });

    it('should create an action to add a todo', () => {
        const text = 'Finish docs';
        const expectedAction = {
            type: types.ADD_TODO,
            text,
        };
        expect(userActions.addTodo(text)).toEqual(expectedAction);
    });
});
