import { types } from "../actions/types";

const defaultState = {
  users: [],
};

export const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case types.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.name !== action.payload),
      };
    default:
      return state;
  }
};
