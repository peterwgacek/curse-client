
export const set_node = (node) => {
    return {
        type: 'SET_NODE',
        payload: {
            node
        }
    };
};




//Reducer

const responderReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_NODE":
            return [...state, currentNode = action.payload];
        default:
            return state;
    }
};

export default responderReducer;



