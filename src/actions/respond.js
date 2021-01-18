
//Action Creator

export const respond = (character, text) => {
    return {
        type: 'RESPOND',
        payload: {
            character: character,
            text: text
        }
    };
};