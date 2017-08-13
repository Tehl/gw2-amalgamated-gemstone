import { connect } from "react-redux";
import Grid from "./Grid";

function compareBy(sortField) {
  return (a, b) => a[sortField + "Price"] - b[sortField + "Price"];
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

const mapStateToProps = state => {
  return {
    recipes: visibleRecipes(
      state.recipes,
      state.display.count,
      state.display.sort,
      state.target
    ),
    materials: state.materials,
    getClassName: item => getItemClass(item, state.target, state.display.sort)
  };
};

const RecipeGrid = connect(mapStateToProps)(Grid);

export default RecipeGrid;
