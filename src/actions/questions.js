import { INIT_QUESTIONS } from "./types";

export function initQuestionsData(questions) {
	return {
		type: INIT_QUESTIONS,
		questions,
	};
}
