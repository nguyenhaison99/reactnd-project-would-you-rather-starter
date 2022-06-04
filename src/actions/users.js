import { addAnswerToQuestion } from "./questions";
import { saveQuestionAnswer } from "../utils/API";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
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
			return await saveQuestionAnswer(authUser, questionId, answer);
		} catch (e) {
			console.warn("Failed to save QuestionAnswer", e);
		}
	};
}

export function addQuestionToUser({ author, questionId }) {
	return {
		type: ADD_QUESTION_TO_USER,
		questionId,
		author,
	};
}
