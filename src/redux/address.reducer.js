import { ADD_SUGGESTIONS_ADDRSSES } from "./action.types";

const defaultState = {
  addresses: [],
};

export const AddressReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SUGGESTIONS_ADDRSSES:
      return { ...state, addresses: [action.payload] };
    default:
      return state;
  }
};
