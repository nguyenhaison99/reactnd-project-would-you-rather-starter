import { getInitialData } from "../utils/API";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}
