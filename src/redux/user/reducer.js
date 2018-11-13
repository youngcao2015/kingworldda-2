/**
 * User Reducer
 *
 */
import * as types from '../types';

// Set initial state
const initialState = {
    loginInfo: {},
    versionInfo: {},
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_INFO: {
            return {
                ...state,
                loginInfo: action.loginInfo,
            };
        }
        case types.VERSION_INFO: {
            return {
                ...state,
                versionInfo: action.versionInfo,
            };
        }
        default:
            return state;
    }
}
