import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import dataService from "./services/dataService";

import "./style.less";

dataService.getRecipeData().then(({ recipes, materials }) => {
  ReactDOM.render(
    <App recipes={recipes} materials={materials} />,
    document.getElementById("root")
  );
});
