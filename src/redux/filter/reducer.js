import {
    INITIAL_STATE,
    INITIAL_FILTER_STATE,
    INITIAL_SESSION_STATE,
} from "./state";

import {
    GET_PROPERTIES,
    FAV_USER_PROPERTIES,
    FILTER_PROPERTIES,
    CITY_PROPERTIES,
    SET_FILTERS,
    RESET_PROPERTIES,
    LOGIN,
    REGISTER,
    LOGOUT,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PROPERTIES:
            return {
                ...state, value: action.payload
            };

        case FAV_USER_PROERTIES:
            return {
                ...state, favorites: action.payload
            };

        case FILTER_PROPERTIES:
            return {
                ...state, value: action.payload
            };

        case CITY_PROPERTIES:
            return {
                ...state, value: action.payload
            };

        case RESET_PROPIERTIES:
            return {
                ...INITIAL_STATE
            };

        default:
            return state;
    }
};

const FilterReducer = (state = INITIAL_FILTER_STATE, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state, value: action.payload
            };

        default:
            return state;
    }
};

const sessionReducer = (state = INITIAL_SESSION_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, value: action.payload
            };
        case REGISTER:
            return {
                ...state, value: action.payload
            };
        case LOGOUT:
            return {
                ...INITIAL_SESSION_STATE
            };

        default:
            return state;
    }
};

export {
    reducer,
    FilterReducer,
    sessionReducer
};