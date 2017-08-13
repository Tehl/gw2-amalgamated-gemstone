import React from "react";
import { formatPrice } from "../../logic/utility";

const GridRow = ({ inputs, buyPrice, sellPrice, materials, className }) =>
  <tr className={className}>
    <td className="ingredient-list">
      {inputs.map((item, idx) =>
        <span key={idx}>
          {item.count + " x " + materials[item.id].name}
        </span>
      )}
    </td>
    <td>
      {formatPrice(buyPrice)}
    </td>
    <td>
      {formatPrice(sellPrice)}
    </td>
  </tr>;

export default GridRow;
