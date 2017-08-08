import { combineReducers } from "redux";
import recipes from "./recipes";
import materials from "./materials";

const app = combineReducers({
  recipes,
  materials
});

export default app;
