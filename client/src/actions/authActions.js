import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from "../types/actionTypes";
import { resetPost } from "./postActions";
import { setErrors } from "./errorActions";

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const registerUser = (userData, history) => dispatch => {
    dispatch(toggleUserLoading());
    axios
        .post(`http://localhost:5000/api/users/signup`, userData)
        .then(res => {
            dispatch(toggleUserLoading());
            localStorage.setItem(
                "loginMessage",
                "Successfully registered. Login to continue"
            );
            history.push("/login");
        })
        .catch(err => {
            console.error(err);
            dispatch(setErrors(err.response?.data));
            dispatch(toggleUserLoading());
        });
};

export const loginUser = userData => dispatch => {
    dispatch(toggleUserLoading());
    axios
        .post("http://localhost:5000/api/users/login", userData)
        .then(res => {
            dispatch(resetPost());
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            dispatch(toggleUserLoading());
        })
        .catch(err => {
            console.error(err);
            dispatch(setErrors(err.response?.data));
            dispatch(toggleUserLoading());
        });
};

export const setCurrentUser = userData => {
    return {
        type: SET_CURRENT_USER,
        payload: userData
    };
};

export const toggleUserLoading = () => {
    return {
        type: TOGGLE_USER_LOADING
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};