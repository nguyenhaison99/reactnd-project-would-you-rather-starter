import { saveQuestion } from "../utils/API";
import { addQuestionToUser } from "./users";
import {
  ADD_QUESTION_TO_QUESTIONS,
  INIT_QUESTIONS,
  ADD_ANSWER_TO_QUESTIONS,
} from "./types";

export function initQuestionsData(questions) {
  return {
    type: INIT_QUESTIONS,
    questions,
  };
}

export function addAnswerToQuestion(authUser, questionId, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTIONS,
    authUser,
    questionId,
    answer,
  };
}

export function addQuestionToQuestions(question) {
  return {
    type: ADD_QUESTION_TO_QUESTIONS,
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
    await dispatch(addQuestionToQuestions(question));
    await dispatch(addQuestionToUser(question));
  };
}
