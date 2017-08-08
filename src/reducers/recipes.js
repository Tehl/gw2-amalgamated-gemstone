const recipes = (state = [], action) => {
  switch (action.type) {
    case "RECIPES_LOADED":
      return [...action.recipes];

    default:
      return state;
  }
};

export default recipes;
