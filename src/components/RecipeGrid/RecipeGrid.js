import { connect } from "react-redux";
import Grid from "./Grid";

function getSortFieldName(sortField) {
  return sortField + "Price";
}

function compareBy(sortField) {
  let fieldName = getSortFieldName(sortField);
  return (a, b) => a[fieldName] - b[fieldName];
}

function visibleRecipes(recipes, count, sortField, target) {
  let compare = compareBy(sortField);
  let visibleRecipes = [...recipes].sort(compare);
  if (count > 0) {
    visibleRecipes = visibleRecipes.slice(0, count);
  }
  if (target) {
    visibleRecipes.push(target);
  }
  return visibleRecipes.sort(compare);
}

function getItemClass(item, target, sortField) {
  if (item.hash === target.hash) {
    return "item-target";
  }

  let compare = compareBy(sortField);

  if (compare(item, target) < 0) {
    return "item-cheap";
  }

  return "item-expensive";
}

function getItemDiscount(item, target, sortField, stack) {
  let fieldName = getSortFieldName(sortField);
  let discount = target[fieldName] - item[fieldName];
  if (stack) {
    discount *= 250;
  }
  return discount;
}

function getDiscountSource(sort) {
  switch (sort) {
    case "buy":
      return "Buy Price";
    default:
      return "Sell Price";
  }
}

const mapStateToProps = state => {
  return {
    recipes: visibleRecipes(
      state.recipes,
      state.display.count,
      state.display.sort,
      state.target
    ),
    materials: state.materials,
    discountSource: getDiscountSource(state.display.sort),
    getClassName: item => getItemClass(item, state.target, state.display.sort),
    getDiscount: (item, stack) =>
      getItemDiscount(item, state.target, state.display.sort, stack)
  };
};

const RecipeGrid = connect(mapStateToProps)(Grid);

export default RecipeGrid;
