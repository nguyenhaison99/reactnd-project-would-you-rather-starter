import {
  ADD_ANSWER_TO_QUESTIONS,
  ADD_QUESTION_TO_QUESTIONS,
  INIT_QUESTIONS,
} from "../actions/types";

export default function questions(state = {}, action) {
  switch (action.type) {
    case INIT_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTIONS:
      const { authUser, questionId, answer } = action;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat(authUser),
          },
        },
      };
    case ADD_QUESTION_TO_QUESTIONS:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
}
