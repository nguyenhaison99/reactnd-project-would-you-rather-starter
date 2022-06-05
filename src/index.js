import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import middlewares from "./middleware";

const store = createStore(rootReducer, middlewares);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
