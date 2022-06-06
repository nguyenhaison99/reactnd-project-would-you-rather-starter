import { ADD_ANSWER_TO_QUESTION, INIT_QUESTIONS } from "../actions/types";

export default function questions(state = {}, action) {
  switch (action.type) {
    case INIT_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTION:
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
    default:
      return state;
  }
}
