import recipes from "../data/recipes";

function getRecipes() {
  return Promise.resolve(recipes);
}

export default {
  getRecipes
};
