import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Sneaker = ({ sneaker }) => {
  const { name, brand, price, color, used, img, id } = sneaker;
  return (
    // <tr>
    //   <td>
    //     <Link to={`/sneakz/${id}`}>{name}</Link>
    //   </td>
    //   <td>{brand}</td>
    //   <td>{price}</td>
    //   <td>{color}</td>
    //   <td>{used ? "✅" : "❌"}</td>
    // </tr>
    //   <div>
    <Card className="sneakers-card">
      <h4>
        <Link to={`/sneakz/${id}`}>{name}</Link>
      </h4>
      <p>{brand}</p>
      <Link to={`/sneakz/${id}`}>
        <img src={img} alt={name} height="200px" width="300px" />
      </Link>
      <p>${price}</p>
      <p style={color === "white" ? { color: "black" } : { color: `${color}` }}>
        {color.toUpperCase()}
      </p>
      <p>{used ? "Used" : "Brand New"}</p>
    </Card>

    //   </div>
  );
};
