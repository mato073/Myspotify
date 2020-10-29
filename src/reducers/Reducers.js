const initialState = {
    access_token: localStorage.getItem('token'),
    expiryTime: localStorage.getItem('expiry_time'),
    Userdata: null,
    playliste: []
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
            case "SETUSER":
                return {
                    ...state,
                    Userdata: action.userdata
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