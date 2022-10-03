import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AddressReducer } from "./address.reducer";
import { UserReducer } from "./user.reducer";

const rootReducer = combineReducers({
  userResucer: UserReducer,
  addressReducer: AddressReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
