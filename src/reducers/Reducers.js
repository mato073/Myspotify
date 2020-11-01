const initialState = {
    access_token: localStorage.getItem('token'),
    expiryTime: localStorage.getItem('expiry_time'),
    userdata: localStorage.getItem('userdata'),
    artist: [],
    track: [],
    playliste: localStorage.getItem('playliste'),
    page: 'Home',
    search: []
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                access_token: action.token
            };
        case "SET_EXPiR":
            return {
                ...state,
                expiryTime: action.expiryTime
            };
        case "SET_USER":
            return {
                ...state,
                userdata: action.user
            };
        case "SET_PLAYLISTE":
            return {
                ...state,
                playliste: action.play
            };
        case "SET_ARTIST":
            return {
                ...state,
                page: action.artist
            };
        case "SET_TRACK":
            return {
                ...state,
                track: action.track
            };
        case "SET_PAGE":
            return {
                ...state,
                page: action.page
            };
        case "SET_SEARCH":
            return {
                ...state,
                search: action.search
            };
        case "DESTROY_SESSION":
            return {
                ...state,
                access_token: undefined,
                userdata: undefined,
                artist: undefined,
                playliste: undefined,
                expiryTime: undefined        
            };
        default:
            return state;
    }
}

export default Reducer;