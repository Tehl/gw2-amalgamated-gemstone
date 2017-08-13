import { combineReducers } from "redux";
import recipes from "./recipes";
import materials from "./materials";
import target from "./target";
import display from "./display";

const app = combineReducers({
  recipes,
  materials,
  target,
  display
});

export default app;
