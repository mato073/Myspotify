const initialState = {
    access_token: localStorage.getItem('token'),
    expiryTime: localStorage.getItem('expiry_time'),
    userdata: localStorage.getItem('userdata'),
    artist: null,
    playliste: localStorage.getItem('playliste'),
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
                userdata: action.user
            };
        case "SETPLAYLISTE":
            return {
                ...state,
                playliste: action.play
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
