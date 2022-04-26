import {combineReducers, createStore} from "redux";
import profileContentReducer from "./profileContentReducer";
import dialogsReducer from "./dialogsReducer";
import sergeyDialogsReducer from "./sergeyDialogReducer";
import pageDialogsReducer from "./pageDialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducer = combineReducers({
    profilePage: profileContentReducer,
    messagesPage: dialogsReducer,
    dialogsSergeyPage: sergeyDialogsReducer,
    pageDialogsPage: pageDialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

})

let store = createStore(reducer);
window.store=store;
export  default store;