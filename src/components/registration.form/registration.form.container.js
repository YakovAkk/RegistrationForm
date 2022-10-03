import { actionTypes } from "../../redux/actions/action.types";

export const formContainer = (dispatch) => ({
  AddAddresses(data) {
    dispatch(actionTypes.AddSuggestion(data));
  },
  AddUser(data) {
    dispatch(actionTypes.AddUser(data));
  },
  RemoveUser(data) {
    dispatch(actionTypes.RemoveUser(data));
  },
});
