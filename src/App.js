import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import { setAuthUser } from "./actions/authUser";
import Login from "./components/login/Login";
import Home from "./components/main/Home";
import Nav from "./components/Nav";
import UserCard from "./components/main/UserCard";
import NewPoll from "./components/login/NewPoll";
import Leaderboard from "./components/main/Leaderboard";
import PageNotFound from "./components/PageNotFound";
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
						<Route render={() => <LoginContentGrid />} />
					) : (
						this.props.authUser !== "not_login" && (
							<Fragment>
								<Nav />
								<ContentGrid>
									<Switch>
										<Route exact path="/" component={Home} />
										{/* <Route exact path="/login" component={LoginContentGrid} /> */}
										<Route path="/addpoll" component={NewPoll} />
										<Route path="/leaderboard" component={Leaderboard} />
										<Route
											path="/questions/question_not_found"
											component={PageNotFound}
										/>
										<Route
											path="/questions/:question_id"
											component={UserCard}
										/>
										<Route component={PageNotFound} />
									</Switch>
								</ContentGrid>
							</Fragment>
						)
					)}
				</div>
			</Router>
		);
	}
}

// class BackToLogin extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			authUser: this.props.authUser,
// 			setAuthUser: this.props.setAuthUser,
// 		};
// 	}
// 	componentDidMount() {
// 		this.state.setAuthUser("");
// 	}

// 	render() {
// 		return <Redirect to="/login" />;
// 	}
// }

const ContentGrid = ({ children }) => (
	<Grid padded="vertically" columns={1} centered>
		<Grid.Row>
			<Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
		</Grid.Row>
	</Grid>
);

const LoginContentGrid = () => {
	return (
		<ContentGrid>
			<Login />
		</ContentGrid>
	);
};

function mapStateToProps({ authUser }) {
	return { authUser };
}

export default connect(mapStateToProps, { handleInitialData, setAuthUser })(
	App
);
