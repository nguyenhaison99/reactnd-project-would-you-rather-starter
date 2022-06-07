import thunk from "redux-thunk";
import loggerMiddleware from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, loggerMiddleware);
