
const reducer = (state = [], action) => {
    switch (action.type) {
        case "SET_NODE":
            return { ...state, currentNode: action.payload }
    }
};


export default reducer;