const searchReducer = (state = "chicken", action) => {
  if (action.type === "SEARCH") {
    return (state = action.search);
  } else {
    return state;
  }
};
export default searchReducer;
