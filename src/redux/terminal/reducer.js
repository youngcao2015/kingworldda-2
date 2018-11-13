/**
 * Terminal Reducer
 *
 */
import * as types from '../types';

// Set initial state
const initialState = {
    isRefreshing: true,
    terminalSalesData: [],
};

export default function terminalReducer(state = initialState, action) {
    switch (action.type) {
        case types.Fetch_Terminal_Sales_Data: {
            return {
                ...state,
                isRefreshing: action.isRefreshing,
            };
        }
        case types.Receive_Terminal_Sales_Data: {
            return {
                ...state,
                isRefreshing: action.isRefreshing,
                terminalSalesData: dealTerminalSalesData(action.terminalSalesData),
            };
        }
        default:
            return state;
    }
}

const dealTerminalSalesData = (data) => {
    return Array.isArray(data) ? data : [];
};
