import recipes from "../data/recipes";
import target from "../data/target";

function getRecipes() {
  return Promise.resolve({
    recipes,
    target
  });
}

export default {
  getRecipes
};
