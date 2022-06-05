import { useEffect } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Login from "./Login";

function App(props) {
	useEffect(() => {
		props.handleInitialData();
	}, [props]);

	return (
		<div className="App">
			<Login />
		</div>
	);
}

function mapStateToProps({}) {
	return {};
}

export default connect(mapStateToProps, { handleInitialData })(App);
