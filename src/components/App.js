import React from "react";
import RecipeGrid from "./RecipeGrid/RecipeGrid";
import DisplayOptions from "./DisplayOptions/DisplayOptions";

const App = () =>
  <div>
    <DisplayOptions/>
    <div className="row">
      <div className="col col-12">
        <RecipeGrid />;
      </div>
    </div>
  </div>;

export default App;
