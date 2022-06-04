import { saveQuestion } from "../utils/API";
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

export function addAnswerToQuestion(authUser, questionId, answer) {
	return {
		type: ADD_ANSWER_TO_QUESTION,
		authUser,
		questionId,
		answer,
	};
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
	return async (dispatch) => {
		const question = await saveQuestion({
			optionOneText,
			optionTwoText,
			author,
		});
		dispatch(addQuestion(question));
		dispatch(addQuestionToUser(question));
	};
}
