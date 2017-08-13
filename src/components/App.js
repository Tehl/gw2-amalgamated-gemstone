import React from "react";
import RecipeGrid from "./RecipeGrid/RecipeGrid";
import DisplayOptions from "./DisplayOptions/DisplayOptions";

const App = () =>
  <div className="row">
    <div className="col col-6 push-center">
      <DisplayOptions />
      <RecipeGrid />
    </div>
  </div>;

export default App;
