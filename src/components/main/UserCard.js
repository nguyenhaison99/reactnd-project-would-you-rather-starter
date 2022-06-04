import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";
import PollTeaser from "./PollTeaser";

const pollTypes = {
	POLL_TEASER: "POLL_TEASER",
	POLL_QUESTION: "POLL_QUESTION",
	POLL_RESULT: "POLL_RESULT",
};

const PollContent = (props) => {
	const { pollType, question, unanswered } = props;

	switch (pollType) {
		case pollTypes.POLL_TEASER:
			return <PollTeaser question={question} unanswered={unanswered} />;
		case pollTypes.POLL_QUESTION:
			return <PollQuestion question={question} />;
		case pollTypes.POLL_RESULT:
			return <PollResult question={question} />;
		default:
			return;
	}
};

class UserCard extends Component {
	static propTypes = {
		question: PropTypes.object.isRequired,
		author: PropTypes.object.isRequired,
		pollType: PropTypes.string.isRequired,
		unanswered: PropTypes.bool,
		questionId: PropTypes.string,
	};

	render() {
		const {
			author,
			question,
			pollType,
			questionNotFound,
			unanswered = null,
		} = this.props;

		if (questionNotFound === true) {
			return <Redirect to="/question_not_found" />;
		}

		return (
			<Segment.Group>
				<Header
					as="h5"
					textAlign="left"
					block
					attached="top"
					style={{ borderTop: "1px solid grey" }}
				>
					{author.name} asks:
				</Header>

				<Grid divided padded>
					<Grid.Row>
						<Grid.Column width={5}>
							<Image src={`${author.avatarURL}`} />
						</Grid.Column>
						<Grid.Column width={11}>
							<PollContent
								pollType={pollType}
								question={question}
								unanswered={unanswered}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment.Group>
		);
	}
}

function mapStateToProps(
	{ users, questions, authUser },
	{ match, questionId }
) {
	let question,
		author,
		pollType,
		questionNotFound = false;

	if (questionId !== undefined) {
		question = questions[questionId];
		author = users[question.author];
		pollType = pollTypes.POLL_TEASER;
	} else {
		const { question_id } = match.params;
		question = questions[question_id];
		const user = users[authUser];

		if (question === undefined) {
			questionNotFound = true;
		} else {
			author = users[question.author];
			pollType = pollTypes.POLL_QUESTION;
			if (Object.keys(user.answers).includes(question.id)) {
				pollType = pollTypes.POLL_RESULT;
			}
		}
	}

	return {
		question,
		author,
		pollType,
		questionNotFound,
	};
}
export default connect(mapStateToProps)(UserCard);
