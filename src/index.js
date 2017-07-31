import recipes from "./data/recipes";
import api from "./api";
import { distinct, formatPrice, formatRecipe } from "./utility";

let itemIds = distinct(
  recipes
    .map(recipe => [recipe.output.id, ...recipe.inputs.map(input => input.id)])
    .reduce((arr, local) => [...arr, ...local], [])
);

Promise.all([api.getItems(itemIds), api.getPrices(itemIds)]).then(res => {
  let materials = {};

  res[0].forEach(item => (materials[item.id] = { id: item.id, name: item.name }));
  res[1].forEach(
    item =>
      (materials[item.id] = {
        ...materials[item.id],
        buy: item.buys.unit_price,
        sell: item.sells.unit_price
      })
  );

  let compiledRecipes = recipes.map(recipe => ({
    ...recipe,
    buyCost: recipe.inputs.reduce((sum, ingredient) => sum + (materials[ingredient.id].buy * ingredient.count) / recipe.output.count, 0),
    sellCost: recipe.inputs.reduce((sum, ingredient) => sum + (materials[ingredient.id].sell * ingredient.count) / recipe.output.count, 0)
  }));

  let buyOrders = [...compiledRecipes].sort((a, b) => a.buyCost - b.buyCost);
  let sellOrders = [...compiledRecipes].sort((a, b) => a.sellCost - b.sellCost);

  console.log('Buy Orders');
  buyOrders.forEach(recipe => console.log(formatRecipe(recipe, materials) + ' : ' + formatPrice(recipe.buyCost)));
  
  console.log('Sell Orders');
  sellOrders.forEach(recipe => console.log(formatRecipe(recipe, materials) + ' : ' + formatPrice(recipe.sellCost)));
});