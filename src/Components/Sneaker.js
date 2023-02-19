import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Sneaker = ({ sneaker }) => {
  const { name, brand, price, color, used, img, id } = sneaker;
  return (
    <Card className="sneakers-card">
      <h5>
        <Link to={`/sneakz/${id}`}>{name}</Link>
      </h5>
      <p>{brand}</p>
      <Link to={`/sneakz/${id}`}>
        <img
          src={img}
          alt={name}
          height="200px"
          width="300px"
          className="index-img"
        />
      </Link>
      <p>${price}</p>
      <p
        style={
          color.toLowerCase() !== "black"
            ? { backgroundColor: "black", color: `${color}` }
            : { backgroundColor: "gray", color: `${color}` }
        }
      >
        {color.toUpperCase()}
      </p>
      <p>{used ? "Used" : "Brand New"}</p>
    </Card>
  );
};
