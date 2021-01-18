
//Action Creator

export const set_node = (node) => {
    return {
        type: 'SET_NODE',
        payload: {
            node
        }
    };
};