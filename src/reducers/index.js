import { combineReducers } from "redux";
import questions from "../reducers/questions";
import users from "../reducers/users";

export default combineReducers({ questions, users });
