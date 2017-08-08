function distinct(arr) {
  return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

function formatPrice(price) {
  let gold = Math.floor(price / 10000);
  let remainder = price - gold * 10000;

  var silver = Math.floor(remainder / 100);
  var copper = remainder - silver * 100;

  return gold + "g " + silver + "s " + copper + "c";
}

function formatRecipe(recipe, materials) {
  return recipe.inputs
    .map(item => item.count + " x " + materials[item.id].name)
    .join(", ");
}

export { distinct, formatPrice, formatRecipe };
