const initialState = {
    access_token: localStorage.getItem('token'),
    expiryTime: localStorage.getItem('expiry_time'),
    userdata: [],
    artist: null,
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
                Userdata: action.user
            };
        case "SETPLAYLISTE":
            return {
                ...state,
                playliste: action.playliste
            };
        case "SETTOP":
            return {
                ...state,
                artist: action.artist
            };
        default:
            return state;
    }
}

export default Reducer;