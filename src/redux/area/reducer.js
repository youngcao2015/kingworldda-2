/**
 * Area Reducer
 *
 */
import * as types from '../types';

// Set initial state
const initialState = {
    indicators: {},
};

export default function areaReducer(state = initialState, action) {
    switch (action.type) {
        case types.INDICATORS: {
            return {
                ...state,
                indicators: action.indicators,
            };
        }
        default:
            return state;
    }
}
