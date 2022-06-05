import { getInitialData } from "../utils/API";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthUser } from "./authUser";

export function handleInitialData() {
	return async (dispatch) => {
		const { users, questions } = await getInitialData();
		const _authUser = localStorage.getItem("authUser");
		if (_authUser !== "not_login") {
			console.log("Setting");
			new Promise((res, rej) => {
				setTimeout(() => res(), 500);
			}).then(() => {
				dispatch(setAuthUser(_authUser));
			});
		}
		dispatch(receiveUsers(users));
		dispatch(receiveQuestions(questions));
	};
}
