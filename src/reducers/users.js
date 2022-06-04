import {
	ADD_ANSWER_TO_USER,
	ADD_QUESTION_TO_USER,
	RECEIVE_USERS,
} from "../actions/users";

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_ANSWER_TO_USER:
			const { authUser, questionId, answer } = action;
			return {
				...state,
				[authUser]: {
					...state[authUser],
					answers: {
						...state[authUser].answers,
						[questionId]: answer,
					},
				},
			};
		case ADD_QUESTION_TO_USER:
			const { author, newQuestionId } = action;
			return {
				...state,
				[author]: {
					...state[authUser],
					questions: state[authUser].questions.concat(newQuestionId),
				},
			};

		default:
			return state;
	}
}
