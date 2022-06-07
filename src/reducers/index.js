import { combineReducers } from "redux";
import questions from "../reducers/questions";
import users from "../reducers/users";
import authUser from "../reducers/authUser";

export default combineReducers({ questions, users, authUser });
