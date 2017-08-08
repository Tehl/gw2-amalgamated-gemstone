import { connect } from "react-redux";
import Grid from "./Grid";

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    materials: state.materials
  };
};

const RecipeGrid = connect(mapStateToProps)(Grid);

export default RecipeGrid;
