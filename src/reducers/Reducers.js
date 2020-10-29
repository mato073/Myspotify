const initialState = {
    access_token: null,
    expiryTime: null
};

function Reducer (state = initialState, action) {
    switch (action.type) {
        case "SETTOKEN":
            return {
                ...state,
                access_token: action.token
            };
        case "SETEXPiR":
            return {
                ...state,
                expiryTime: action.expiryTime
            };
        default:
            return state;
    }
}

export default Reducer;