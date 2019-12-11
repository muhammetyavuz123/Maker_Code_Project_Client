export default (state = {}, action) => {
  switch (action.type) {
    case "POST_REGISTER":
      return action.payload;

    default:
      return state;
  }
};
