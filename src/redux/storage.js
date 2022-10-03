import { createStore } from "redux";
import { UserReducer } from "./user.reducer";

export const store = createStore(UserReducer);
