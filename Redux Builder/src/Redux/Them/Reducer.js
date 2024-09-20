import { SET_THEME } from "../ActionType";

// reducers/themeReducer.js
const initialState = 'light';

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return action.payload;
        default:
            return state;
    }
};

