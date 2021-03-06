
import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postReducers";

// root reducer
export default combineReducers({
    auth: authReducer,
    post: postReducer,
    errors: errorReducer
});