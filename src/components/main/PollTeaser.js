import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

class PollTeaser extends Component {
	state = {
		viewPoll: false,
	};

	static propTypes = {
		question: PropTypes.object.isRequired,
		unanswered: PropTypes.bool.isRequired,
	};

	handleClick = (e) => {
		this.setState((prevState) => ({
			viewPoll: !prevState.viewPoll,
		}));
	};
	render() {
		const { question, unanswered } = this.props;

		if (this.state.viewPoll === true) {
			return <Redirect push to={`/questions/${question.id}`} />;
		}
		return (
			<Fragment>
				<Header as="h5" textAlign="left">
					Would you rather
				</Header>
				<p
					style={{ textAlign: "center" }}
				>{`...${question.optionOne.text}...`}</p>
				<Button
					fluid
					color={unanswered ? "pink" : "green"}
					size="tiny"
					onClick={this.handleClick}
					content={"View Poll"}
				/>
			</Fragment>
		);
	}
}

export default PollTeaser;
