export default (state = [], action) => {
  switch (action.type) {
    case "GET_SEARCH":
      return [...state, action.payload];

    default:
      return state;
  }
};
