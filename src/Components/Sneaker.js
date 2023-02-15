import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Sneaker = ({ sneaker }) => {
  // console.log(sneaker)
  const { name, brand, price, color, used, img, id } = sneaker;
  return (
    <Card className="sneakers-card">
      <h4>
        <Link to={`/sneakz/${id}`}>{name}</Link>
      </h4>
      <p>{brand}</p>
      <Link to={`/sneakz/${id}`}>
        <img src={img} alt={name} height="200px" width="300px" />
      </Link>
      <p>${price}</p>
      <p style={color.toLowerCase() === "white" ? { backgroundColor: "black", color: "white" } : { color: `${color}` }}>
        {color.toUpperCase()}
      </p>
      <p>{used ? "Used" : "Brand New"}</p>
    </Card>
  );
};
