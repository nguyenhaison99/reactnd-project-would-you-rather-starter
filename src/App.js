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
import { Redirect } from "react-router-dom";
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
						<BackToLogin
							authUser={this.props.authUser}
							setAuthUser={this.props.setAuthUser}
						/>
					) : (
						<Fragment>
							<Nav />
							<ContentGrid>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/login" component={LoginContentGrid} />
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

class BackToLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authUser: this.props.authUser,
			setAuthUser: this.props.setAuthUser,
		};
	}
	componentDidMount() {
		this.state.setAuthUser("");
	}

	render() {
		return <Redirect to="/login" />;
	}
}

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
