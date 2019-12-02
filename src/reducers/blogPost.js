export default (state = [], action) => {
  switch (action.type) {
    case "BLOG_POST":
      return action.payload;

    default:
      return state;
  }
};
