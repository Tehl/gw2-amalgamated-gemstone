import recipes from "../data/recipes-test";

function getRecipes() {
  return Promise.resolve(recipes);
}

export default {
  getRecipes
};
