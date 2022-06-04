export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

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
