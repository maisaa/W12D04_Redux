const initialState = {token: ""}
    


const loginReducers = ( state = initialState, {type, payload}) =>{

    switch (type) {
        case 'SET_Token':
            return { token: payload};
            
        default:
            return state;
    }
};

export default loginReducers;

//Actions
export const setToken = (newToken) => {
    return { type: 'SET_Token', payload: newToken };
};