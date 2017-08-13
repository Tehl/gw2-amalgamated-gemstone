import React from "react";
import GridRow from "./GridRow";

import "./recipeGrid.less";

const Grid = ({ recipes, materials, discountSource, getDiscount, getClassName, onBuyClick, onSellClick }) =>
  <table className="recipe-grid">
    <thead>
      <tr>
        <th>Ingredients</th>
        <th>Buy Price</th>
        <th>Sell Price</th>
        <th>{discountSource} Discount (Item)</th>
        <th>{discountSource} Discount (Stack)</th>
      </tr>
    </thead>
    <tbody>
      {recipes.map(item =>
        <GridRow
          key={item.hash}
          inputs={item.inputs}
          buyPrice={item.buyPrice}
          sellPrice={item.sellPrice}
          materials={materials}
          discountSingle={getDiscount(item, false)}
          discountStack={getDiscount(item, true)}
          className={getClassName(item)}
        />
      )}
    </tbody>
  </table>;

export default Grid;
