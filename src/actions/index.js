import axios from "axios";
import api from "../api/db";
import db from "../api/db";

export const usersGet = () => async dispatch => {
  const response = await db.get("/");

  dispatch({ type: "GET_USERS", payload: response.data });
};
