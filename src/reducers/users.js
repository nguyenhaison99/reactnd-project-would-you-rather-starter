import { ADD_ANSWER_TO_USER, INIT_USERS } from "../actions/types";

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
    default:
      return state;
  }
}
