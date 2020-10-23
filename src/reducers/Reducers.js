const initialState = {
    token: null
};

function Reducer (state = initialState, action) {
    switch (action.type) {
        case "SETTOKEN":
            return {
                token: action.token
            };
    }
}

export default Reducer;