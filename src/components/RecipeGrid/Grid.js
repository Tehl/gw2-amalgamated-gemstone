import React from "react";
import GridRow from "./GridRow";

import "./recipeGrid.less";

const Grid = ({ recipes, materials, onBuyClick, onSellClick }) =>
  <table className="recipe-grid">
    <thead>
      <tr>
        <th>Ingredients</th>
        <th>Buy Price</th>
        <th>Sell Price</th>
      </tr>
    </thead>
    <tbody>
      {recipes.map((item, idx) =>
        <GridRow
          key={idx}
          inputs={item.inputs}
          buyPrice={item.buyPrice}
          sellPrice={item.sellPrice}
          materials={materials}
        />
      )}
    </tbody>
  </table>;

export default Grid;
