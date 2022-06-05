import { INIT_USERS } from "../actions/types";

export default function users(state = {}, action) {
	switch (action.type) {
		case INIT_USERS:
			return {
				...state,
				...action.users,
			};

		default:
			return state;
	}
}
