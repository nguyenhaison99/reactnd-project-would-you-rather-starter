import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  INIT_USERS,
} from "../actions/types";

export default function users(state = {}, action) {
  switch (action.type) {
    case INIT_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_USER:
      const { authUser, questionId, answer } = action;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [questionId]: answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      const { author, id } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
}
