import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
} from "./_DATA";

export async function getInitialData() {
	const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
	return {
		users,
		questions,
	};
}

export function saveQuestion(info) {
	return _saveQuestion(info);
}

export function saveQuestionAnswer(authUser, questionId, answer) {
	return _saveQuestionAnswer({ authUser, questionId, answer });
}
