export default (state = [], action) => {
  switch (action.type) {
    case "GET_BLOG":
      return action.payload;

    default:
      return state;
  }
};
