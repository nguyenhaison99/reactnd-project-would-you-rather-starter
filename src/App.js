import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
	componentDidMount() {
		this.props.handleInitialData();
	}

	render() {
		return (
			<Router>
				<div className="App">
					{this.props.authUser === null ? (
						<Routes>
							<Route
								path="/*"
								element={
									<ContentGrid>
										<Login />
									</ContentGrid>
								}
							/>
						</Routes>
					) : (
						<Fragment>
							<Nav />
							<ContentGrid>
								<Routes>
									<Route exact path="/abc" element={<Home />} />
								</Routes>
							</ContentGrid>
						</Fragment>
					)}
				</div>
			</Router>
		);
	}
}

const ContentGrid = ({ children }) => (
	<Grid padded="vertically" columns={1} centered>
		<Grid.Row>
			<Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
		</Grid.Row>
	</Grid>
);

function mapStateToProps({ authUser }) {
	return { authUser };
}

export default connect(mapStateToProps, { handleInitialData })(App);
