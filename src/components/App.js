import React from "react";
import RecipeGrid from "./RecipeGrid/Grid";

const App = ({ recipes, materials }) =>
  <div className="row">
    <div className="col col-12">
      <RecipeGrid recipes={recipes} materials={materials} />;
    </div>
  </div>;

export default App;
