/**
 * Combine All Reducers
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { combineReducers } from 'redux';

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import user from './user/reducer';
import area from './area/reducer';
import mine from './mine/reducer';
import terminal from './terminal/reducer';

// Combine all
const appReducer = combineReducers({
    user,
    area,
    mine,
    terminal,
});

// Setup root reducer
const rootReducer = (state, action) => {
    const newState = action.type === 'RESET' ? undefined : state;
    return appReducer(newState, action);
};

export default rootReducer;
