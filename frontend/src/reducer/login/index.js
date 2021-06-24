const initialState = {
    tokens: [
        {token: ""}
    ]
}

const loginReducers = ( state = initialState, {type, payload}) =>{
    return { tokens:[...payload]};
};

export default loginReducers;

//Actions
export const setToken = (newToken) => {
    return { type: 'SET_Token', payload: newToken };
};