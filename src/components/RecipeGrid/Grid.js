import React from "react";
import GridRow from "./GridRow";

import "./recipeGrid.less";

const Grid = ({
  recipes,
  materials,
  discountSource,
  getDiscount,
  getClassName,
  onBuyClick,
  onSellClick
}) => (
  <div className="row">
    <table className="recipe-grid">
      <thead>
        <tr>
          <th className="w40">
            <span title="Ingredients">Ingredients</span>
          </th>
          <th className="w15">
            <span title="Buy Price">Buy Price</span>
          </th>
          <th className="w15">
            <span title="Sell Price">Sell Price</span>
          </th>
          <th className="w15">
            <span title={discountSource + " Discount (Item)"}>
              Discount (Item)
            </span>
          </th>
          <th className="w15">
            <span title={discountSource + " Discount (Stack)"}>
              Discount (Stack)
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(item => (
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
        ))}
      </tbody>
    </table>
  </div>
);

export default Grid;
