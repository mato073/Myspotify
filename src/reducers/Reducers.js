const initialState = {
    access_token: null,
    expiryTime: null
};

function Reducer (state = initialState, action) {
    switch (action.type) {
        case "SETTOKEN":
            return {
                access_token: action.access_token
            };
        case "SETEXPIR":
            return {
                expiryTime: action.expiryTime
            };
    }
}

export default Reducer;