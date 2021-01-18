
//Reducer

const responderReducer = (state, action) => {
    switch (action.type) {
        case "RESPOND":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default responderReducer;



