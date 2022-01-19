import {
    GET_PROPERTIES,
    FILTER_PROPERTIES,
    CITY_PROPERTIES,
    SET_FILTERS,
    RESET_PROPERTIES,
    LOGIN,
    REGISTER,
    LOGOUT,
} from "./types";

export const set_filters = (datafilters) => {
    return (dispatch) => {
        dispatch({ type: SET_FILTERS, payload: datafilters });
    };
    };