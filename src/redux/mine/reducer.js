/**
 * Mine Reducer
 *
 */
import * as types from '../types';

// Set initial state
const initialState = {
    indiscators: {},
    salesVolume: {},
    loading: true,
};

export default function mineReducer(state = initialState, action) {
    switch (action.type) {
        case types.Mine_Sales_Loading_State: {
            return {
                ...state,
                loading: action.loading,
            };
        }
        case types.Mine_Indicators_Sales: {
            return {
                ...state,
                ...action.indicatorsAndSales,
                loading: action.loading,
            };
        }
        default:
            return state;
    }
}
