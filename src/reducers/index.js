import { combineReducers } from "redux";
import cardsGet from "./cardsGet";
import singleCardGet from "./singleCardGet";
import blogGet from "./blogGet";
import blogPost from "./blogPost";

export default combineReducers({
  cards: cardsGet,
  card: singleCardGet,
  blogGet: blogGet,
  blogPost: blogPost
});
