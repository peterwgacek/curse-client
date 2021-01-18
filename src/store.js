import { createStore, applyMiddleware } from 'redux'
import responderReducer from './reducers/responder'
import Murray from './assets/Murray';

const store = createStore(
    responderReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store