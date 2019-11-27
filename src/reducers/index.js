import { combineReducers } from "redux";
import usersGet from "./usersGet";

export default combineReducers({
  users: usersGet
});
