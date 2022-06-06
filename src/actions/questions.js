import { ADD_ANSWER_TO_QUESTION, INIT_QUESTIONS } from "./types";

export function initQuestionsData(questions) {
  return {
    type: INIT_QUESTIONS,
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
