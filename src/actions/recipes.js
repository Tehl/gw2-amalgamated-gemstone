import dataService from "../services/dataService";

function loadRecipes() {
  return function(dispatch) {
    return dataService.getRecipeData().then(({ recipes, materials }) => {
      dispatch({ type: "RECIPES_LOADED", recipes, materials });
    });
  };
}

export { loadRecipes };
