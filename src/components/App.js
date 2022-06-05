import { useEffect } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

function App(props) {
	useEffect(() => {
		props.handleInitialData();
	}, [props]);

	return <div className="App">Hello World</div>;
}

function mapStateToProps({}) {
	return {};
}

export default connect(mapStateToProps, { handleInitialData })(App);
