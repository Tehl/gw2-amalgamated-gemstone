import { combineReducers } from "redux";
import recipes from "./recipes";
import materials from "./materials";
import display from "./display";

const app = combineReducers({
  recipes,
  materials,
  display
});

export default app;
