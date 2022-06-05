import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
} from "./_DATA";

export async function initApplicationData() {
	const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
	return {
		users,
		questions,
	};
}

export function saveQuestion(question) {
	return _saveQuestion(question);
}

export function saveAnswer(authUser, questionId, answer) {
	return _saveQuestionAnswer({ authUser, questionId, answer });
}
