import { SET_ERRORS } from "../types/actionTypes";

export const setErrors = error => {
    return {
        type: SET_ERRORS,
        payload: error
    };
};

export const clearErrors = () => {
    return {
        type: SET_ERRORS,
        payload: {}
    };
};