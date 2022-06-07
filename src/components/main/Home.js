import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";

import UserCard from "./UserCard";

class Home extends Component {
	static propTypes = {
		userQuestionData: PropTypes.object.isRequired,
	};

	render() {
		const { userQuestionData } = this.props;

		return <Tab panes={getPanesData({ userQuestionData })} className="tab" />;
	}
}

const getPanesData = (props) => {
	const { userQuestionData } = props;

	return [
		{
			menuItem: "Unanswered",
			render: () => (
				<Tab.Pane>
					{userQuestionData.unanswered.map((question) => (
						<UserCard
							key={question.id}
							questionId={question.id}
							unanswered={true}
						/>
					))}
				</Tab.Pane>
			),
		},
		{
			menuItem: "Answered",
			render: () => (
				<Tab.Pane>
					{userQuestionData.answered.map((question) => (
						<UserCard
							key={question.id}
							questionId={question.id}
							unanswered={false}
						/>
					))}
				</Tab.Pane>
			),
		},
	];
};

function mapStateToProps({ authUser, users, questions }) {
	const authUserAnsweredIds = Object.keys(users[authUser].answers);

	const authUserAnswered = Object.values(questions)
		.filter((question) => authUserAnsweredIds.includes(question.id))
		.sort((a, b) => b.timestamp - a.timestamp);
	const authUserUnanswered = Object.values(questions)
		.filter((question) => !authUserAnsweredIds.includes(question.id))
		.sort((a, b) => b.timestamp - a.timestamp);

	return {
		userQuestionData: {
			answered: authUserAnswered,
			unanswered: authUserUnanswered,
		},
	};
}

export default connect(mapStateToProps)(Home);
