import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "react-bootstrap";

import hero from "../assets/sneakz-logo.jpeg";
import { useSelector } from "react-redux";

export const NavBar = ({cartItems}) => {
  let navigate = useNavigate();
  // const cart = useSelector((state) => state.cart);

  const returnHome = () => {
    navigate("/");
  };

  // const getAllSneakers = () => {
// console.log(window.location)
// const lc = "/sneakz"
// e.preventDefault()
//  let path = !window.location.search ? 
//    'sneakz' : null
  
  // if (path) {
  //   navigate("/sneakz")
  //   window.location.reload()
  // }
    
    // return path;
    // onClick={window.location.reload()}
  // }


  return (
    <div>
      <Navbar className="justify-content-center">
        <Button className="sneaker-index-link">
          <Link to={`/sneakz`}>All Sneakers</Link>
        </Button>
        <Navbar.Brand>
          <img
            className="hero"
            onClick={returnHome}
            src={hero}
            // src="https://static.vecteezy.com/system/resources/thumbnails/005/489/541/small_2x/line-abstract-red-young-shoe-sneaker-logo-design-graphic-symbol-icon-sign-illustration-creative-idea-vector.jpg"
            alt="hero"
            width="400px"
            height="200px"
          />
        </Navbar.Brand>
        <Button variant="outline-danger" className="sneaker-new-button">
          <Link to="/sneakz/new">New Sneaker</Link>
              </Button>
              <Button variant="outline-danger" className="cart-button">
          <Link to="/sneakz/cart">🛒</Link>
          <Badge>{cartItems.length}</Badge>
        </Button>
      </Navbar>
    </div>
  );
};
