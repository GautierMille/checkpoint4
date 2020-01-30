const initialState = {
    user_id: null,
    pseudo: null
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "LOG":
            newState.user_id = action.value;
            return newState;
        default:
            return newState;
    }
};

export default reducer;
