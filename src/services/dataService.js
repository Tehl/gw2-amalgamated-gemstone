import materialService from "./materialService";
import recipeService from "./recipeService";
import { distinct } from "../logic/utility";

function calculateRecipe(recipe, materials) {
  return {
    ...recipe,
    buyPrice: recipe.inputs.reduce(
      (sum, ingredient) =>
        sum +
        materials[ingredient.id].buy * ingredient.count / recipe.output.count,
      0
    ),
    sellPrice: recipe.inputs.reduce(
      (sum, ingredient) =>
        sum +
        materials[ingredient.id].sell * ingredient.count / recipe.output.count,
      0
    )
  };
}

function getRecipeData() {
  return recipeService.getRecipes().then(({ recipes, target }) => {
    let itemIds = distinct(
      recipes
        .map(recipe => [
          recipe.output.id,
          ...recipe.inputs.map(input => input.id)
        ])
        .concat(target.inputs.map(input => input.id))
        .reduce((arr, local) => [...arr, ...local], [])
    );

    return materialService.getMaterials(itemIds).then(materials => {
      let compiledRecipes = recipes.map(recipe =>
        calculateRecipe(recipe, materials)
      );

      return {
        materials,
        recipes: compiledRecipes,
        target: calculateRecipe(target, materials)
      };
    });
  });
}

export default { getRecipeData };
