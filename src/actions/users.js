import { saveAnswer } from "../utils/API";
import { addAnswerToQuestion } from "./questions";
import { ADD_ANSWER_TO_USER, INIT_USERS } from "./types";

export function initUsersData(users) {
  return {
    type: INIT_USERS,
    users,
  };
}

function addAnswerToUser(authUser, questionId, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    questionId,
    answer,
  };
}

export function handleSaveQuestionAnswer(authUser, questionId, answer) {
  return async (dispatch) => {
    await dispatch(addAnswerToUser(authUser, questionId, answer));
    await dispatch(addAnswerToQuestion(authUser, questionId, answer));

    try {
      return await saveAnswer(authUser, questionId, answer);
    } catch (e) {
      console.warn("Failed to save an Answer", e);
    }
  };
}
