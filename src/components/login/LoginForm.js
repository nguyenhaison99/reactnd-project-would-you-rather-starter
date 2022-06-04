import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Form, FormDropdown } from "semantic-ui-react";
import { setAuthUser } from "../../actions/authUser";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
	state = {
		value: "",
		submitSucceded: false,
	};

	static propTypes = {
		onLoading: PropTypes.func.isRequired,
	};

	onChange = (e, { value }) => {
		this.setState({ value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { onLoading, setAuthUser } = this.props;
		const authUser = this.state.value;

		new Promise((res, rej) => {
			onLoading();
			setTimeout(() => res(), 500);
		}).then(() => {
			setAuthUser(authUser);
			this.setState({ submitSucceded: true });
		});
	};

	generateDropdownData = () => {
		const { users } = this.props;
		return users.map((user) => ({
			key: user.id,
			text: user.name,
			value: user.id,
			image: { avatar: true, src: user.avatarURL },
		}));
	};

	render() {
		const { value } = this.state;
		const disabled = value === "" ? true : false;

		if (this.state.submitSucceded === true) return <Redirect to="/" />;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Header as="h2" color="green">
					Sign In
				</Header>
				<FormDropdown
					placeholder="Select a Friend"
					fluid
					selection
					scrolling
					options={this.generateDropdownData()}
					value={value}
					onChange={this.onChange}
					required
				/>
				<Form.Button content="Login" positive disabled={disabled} fluid />
			</Form>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		users: Object.values(users),
	};
}

export default connect(mapStateToProps, { setAuthUser })(LoginForm);
