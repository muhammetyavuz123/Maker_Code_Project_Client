export default (state = {}, action) => {
  switch (action.type) {
    case "GET_SİNGLE":
      return action.payload;

    default:
      return state;
  }
};
