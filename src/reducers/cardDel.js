export default (state = [], action) => {
  switch (action.type) {
    case "CARD_DELETE":
      return action.payload;

    default:
      return state;
  }
};
