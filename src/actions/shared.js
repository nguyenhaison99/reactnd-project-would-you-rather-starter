import { initApplicationData } from "../utils/API";
import { initQuestionsData } from "../actions/questions";
import { initUsersData } from "../actions/users";

export function handleInitialData() {
	return async (dispatch) => {
		const { users, questions } = await initApplicationData();
		dispatch(initUsersData(users));
		dispatch(initQuestionsData(questions));
	};
}
