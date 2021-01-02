import { combineReducers } from "redux";
import featureReducer from "./bugs";
import usersReducer from "./users";

export default combineReducers({
  feature: featureReducer,
  users: usersReducer
});
