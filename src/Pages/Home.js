import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export const Home = () => {
    const [sneaker, setSneaker] = useState([]);
    
    const { name, brand, img, price, id } = sneaker;

  useEffect(() => {
    axios
      .get(`${API}/sneakz`)
      .then((res) => {
        // console.log(res.data)
        setSneaker(res.data[Math.floor(Math.random() * res.data.length)]);
      })
      .catch((c) => console.error("catch", c));
  }, []);

  return (
      <div className="home-page text-center">
          <div className="article-1">
      <h5 className="slogan">
        "BUY AND SELL YOUR FAVORITE SNEAKERS. BEST BRANDS, BEST PRICES!"
      </h5>
      <article className="home-page-featured">
        <h3 className="text-center">⭐️ Featured ⭐️</h3>
        <br />
        <Link to={`/sneakz/${id}`}>
          {" "}
          <h4>{name}</h4>
        </Link>
        <h5>{brand}</h5>
        <Link to={`/sneakz/${id}`}>
          <img
            src={img}
            alt={name}
            height="200px"
            width="300px"
          />
              </Link>
              <h4>Only ${price}!!</h4>
      </article>
          </div>
          <div className="article-2">
              <h4>Don't Miss This Offer!!!</h4>
              <h5>Buy Two Pairs And Save</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJA7lCL7O45AUk49nO5WaJIsfuEPZeyQZ8TA&usqp=CAU" alt="20 percent off" />
              <br />
              <br />
              <br/>
              <Link to={`/sneakz`}>
              <Button variant="danger">SHOP NOW!</Button>
              </Link>
          </div>
    </div>
  );
};
