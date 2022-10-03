import { types } from "./types";

export const actionTypes = {
  AddUser(user) {
    return {
      type: types.ADD_USER,
      payload: user,
    };
  },

  RemoveUser(user) {
    return {
      type: types.REMOVE_USER,
      payload: user,
    };
  },

  AddSuggestion(suggestions) {
    return {
      type: types.ADD_SUGGESTIONS_ADDRSSES,
      payload: suggestions,
    };
  },
};
