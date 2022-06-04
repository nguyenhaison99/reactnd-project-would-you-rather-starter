import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Login from "./components/login/Login";
import Home from "./components/main/Home";
import Nav from "./components/Nav";
import UserCard from "./components/main/UserCard";
// import "./App.css";

class App extends Component {
	componentDidMount() {
		this.props.handleInitialData();
	}

	render() {
		return (
			<Router>
				<div className="App">
					{this.props.authUser === null ? (
						<Route
							path="/*"
							render={() => (
								<ContentGrid>
									<Login />
								</ContentGrid>
							)}
						/>
					) : (
						<Fragment>
							<Nav />
							<ContentGrid>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/questions/:question_id" component={UserCard} />
								</Switch>
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
