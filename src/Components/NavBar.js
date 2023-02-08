import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import hero from "../assets/sneakz-logo.jpeg";

export const NavBar = () => {
  let navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar className="justify-content-center">
        <Nav.Item className="sneaker-index-link">
          <Link to="/sneakz">All Sneakers</Link>
        </Nav.Item>
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
      </Navbar>
    </div>
  );
};
