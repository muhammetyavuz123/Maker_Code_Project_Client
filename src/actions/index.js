import axios from "axios";
import api from "../api/db";
import db from "../api/db";

//card get action
export const cardsGet = keyWord => async dispatch => {
  await dispatch(cardSearch(keyWord));
  const response = await db.get("/cards", {
    params: {
      query: keyWord
    }
  });

  dispatch({ type: "GET_USERS", payload: response.data });
};

// id ile card get action
export const cardGet = singleUserID => async dispatch => {
  const response = await db.get(`/cards/${singleUserID}`);

  dispatch({ type: "GET_SİNGLE", payload: response.data });
};
//search bar value action
export const cardSearch = search => async dispatch => {
  dispatch({ type: "GET_SEARCH", payload: search });
};

// blog action
export const blogGet = () => async dispatch => {
  const response = await db.get("/blok");

  dispatch({ type: "GET_BLOG", payload: response.data });
};

export const blogPost = () => async dispatch => {
  const response = await db.post("/blok");

  dispatch({ type: "BLOG_POST", payload: response.data });
};
//card Delete
export const cardDel = cardId => async dispatch => {
  const res = await db.delete(`/cards/${cardId}`, {
    headers: {
      Authorization: localStorage.getItem("JWT_Token")
    }
  });

  dispatch({
    type: "CARD_DELETE",
    payload: { data: res.data, date: new Date() }
  });
};
