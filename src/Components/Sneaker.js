import React from "react";
import { Link } from "react-router-dom";

export const Sneaker = ({ sneaker }) => {
  const { name, brand, price, color, used, id } = sneaker;
  return (
    <tr>
      <td>
        <Link to={`/sneakz/${id}`}>{name}</Link>
      </td>
      <td>{brand}</td>
      <td>{price}</td>
      <td>{color}</td>
      <td>{used ? "✅" : "❌"}</td>
    </tr>
  );
};
