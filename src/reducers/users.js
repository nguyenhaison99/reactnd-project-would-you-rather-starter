import { ADD_ANSWER_TO_USER, RECEIVE_USERS } from "../actions/users";

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

		default:
			return state;
	}
}
