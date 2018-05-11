import React from "react";
import { formatPrice } from "../../logic/utility";

const GridRow = ({
  inputs,
  buyPrice,
  sellPrice,
  discountSingle,
  discountStack,
  materials,
  className
}) => (
  <tr className={className}>
    <td className="ingredient-list">
      {inputs.map((item, idx) => (
        <span key={idx}>{item.count + " x " + materials[item.id].name}</span>
      ))}
    </td>
    <td>{formatPrice(buyPrice)}</td>
    <td>{formatPrice(sellPrice)}</td>
    <td>{formatPrice(discountSingle)}</td>
    <td>{formatPrice(discountStack)}</td>
  </tr>
);

export default GridRow;
