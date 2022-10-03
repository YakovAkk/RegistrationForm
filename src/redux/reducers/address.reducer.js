import { types } from "../actions/types";

const defaultState = {
  addresses: [],
};

export const AddressReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_SUGGESTIONS_ADDRSSES:
      return { ...state, addresses: [action.payload] };
    default:
      return state;
  }
};
