/**
 * @providesModule __mocks__/redux-mock-store
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/index';

const middlewares = [thunk];
export const initStore = configureMockStore(middlewares);
export default initStore(rootReducer({}, { type: '__mocks__' }));
