import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";

export class PageNotFound extends Component {
	state = {
		outOfTime: false,
	};
	render() {
		if (this.state.outOfTime === true) return <Redirect to="/login" />;
		return (
			<Container textAlign="center">
				<Header as="h2">PageNotFound: 404 Error</Header>
				<h5>Redirecting you to Home Page in a few seconds.</h5>
				{setTimeout(() => {
					this.setState({ outOfTime: !this.state.outOfTime });
				}, 3000)}
			</Container>
		);
	}
}

export default PageNotFound;
