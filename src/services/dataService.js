import materialService from "./materialService";
import recipeService from "./recipeService";
import { distinct } from "../logic/utility";

function getRecipeData() {
  return recipeService.getRecipes().then(recipes => {
    let itemIds = distinct(
      recipes
        .map(recipe => [
          recipe.output.id,
          ...recipe.inputs.map(input => input.id)
        ])
        .reduce((arr, local) => [...arr, ...local], [])
    );

    return materialService.getMaterials(itemIds).then(materials => {
      let compiledRecipes = recipes.map(recipe => ({
        ...recipe,
        buyPrice: recipe.inputs.reduce(
          (sum, ingredient) =>
            sum +
            materials[ingredient.id].buy *
              ingredient.count /
              recipe.output.count,
          0
        ),
        sellPrice: recipe.inputs.reduce(
          (sum, ingredient) =>
            sum +
            materials[ingredient.id].sell *
              ingredient.count /
              recipe.output.count,
          0
        )
      }));

      return {
        materials,
        recipes: compiledRecipes
      };
    });
  });
}

export default { getRecipeData };
