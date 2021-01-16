import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'
import responderReducer from './reducers/responder'

const store = createStore(responderReducer)



export default store