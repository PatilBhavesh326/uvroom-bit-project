import { combineReducers } from "redux";
import currentUser  from "./userReducer";
import bookCounter from "./bookCounter"
import createBookReducer from "./bookReducer";

export const rootReducer = combineReducers({
    currentUser,
    bookCounter,
    createBookReducer
});
