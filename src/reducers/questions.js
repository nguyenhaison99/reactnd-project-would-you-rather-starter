import { INIT_QUESTIONS } from "../actions/types";

export default function questions(state = {}, action) {
	switch (action.type) {
		case INIT_QUESTIONS:
			return {
				...state,
				...action.questions,
			};

		default:
			return state;
	}
}
