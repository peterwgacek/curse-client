import { createStore } from 'redux';
import { Response } from './components/Response/Response';


//Action
const response = (node) => {
    return {
        type: 'SET_NODE',
        payload: {
            node
        }
    };
    // mapDispatchtoProps(response);
};



//Reducer

const responderReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_NODE":
            return [...state, currentNode(action.payload)];
        default:
            return state;
    }
};

mapStateToProps(currentNode(state.currentNode));

//Store

const store = createStore(
    responderReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;