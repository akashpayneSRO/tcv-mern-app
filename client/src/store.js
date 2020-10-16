import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

// Export the store and pass it across the application using the provider
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;