import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Button, Form, Radio } from "semantic-ui-react";
import { handleSaveQuestionAnswer } from "../../actions/users";

class PollQuestion extends Component {
	state = {
		value: "",
	};

	static propTypes = {
		authUser: PropTypes.string.isRequired,
		question: PropTypes.object.isRequired,
		handleSaveQuestionAnswer: PropTypes.func.isRequired,
	};

	handleChange = (e, { value }) => this.setState({ value });

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.value !== "") {
			const { authUser, question, handleSaveQuestionAnswer } = this.props;
			handleSaveQuestionAnswer(authUser, question.id, this.state.value);
		}
	};

	render() {
		const { question } = this.props;
		const disabled = this.state.value === "" ? true : false;

		return (
			<Fragment>
				<Header as="h4">Would you rather</Header>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<Radio
							name="radioGroup"
							value="optionOne"
							label={question.optionOne.text}
							checked={this.state.value === "optionOne"}
							onChange={this.handleChange}
						/>
						<br />
						<Radio
							name="radioGroup"
							value="optionTwo"
							label={question.optionTwo.text}
							checked={this.state.value === "optionTwo"}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Button
							fluid
							color="red"
							size="tiny"
							positive
							disabled={disabled}
							content="Submit"
						/>
					</Form.Field>
				</Form>
			</Fragment>
		);
	}
}

function mapStateToProps({ authUser }) {
	return { authUser };
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
	PollQuestion
);
