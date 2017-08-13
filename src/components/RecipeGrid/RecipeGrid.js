import { connect } from "react-redux";
import Grid from "./Grid";

function visibleRecipes(recipes, count, sortField) {
  let visibleRecipes = [...recipes].sort(
    (a, b) => a[sortField + "Price"] - b[sortField + "Price"]
  );
  if (count > 0) {
    visibleRecipes = visibleRecipes.slice(0, count);
  }
  return visibleRecipes;
}

const mapStateToProps = state => {
  return {
    recipes: visibleRecipes(
      state.recipes,
      state.display.count,
      state.display.sort
    ),
    materials: state.materials
  };
};

const RecipeGrid = connect(mapStateToProps)(Grid);

export default RecipeGrid;
