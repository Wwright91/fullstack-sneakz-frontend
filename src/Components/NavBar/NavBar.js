import "./NavBar.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "react-bootstrap";
import hero from "../../assets/sneakz-logo.jpeg";

export const NavBar = ({ cartItems }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  let navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (<>
    {
      !loggedIn?(
        <div>
                <Navbar className="justify-content-center">
        <Navbar.Brand>
          <img
            className="hero"
            onClick={returnHome}
            src={hero}
            alt="hero"
            width="400px"
            height="200px"
          />
        </Navbar.Brand>
        <Button variant="outline-danger" className="user-profile-button">
          <Link to="/login">Login / Sign Up</Link>
        </Button>
      </Navbar>
      </div>
    ) :
    (<div>
      <Navbar className="justify-content-center">
        <Button variant="outline-danger" className="sneaker-index-link">
          <Link to={`/sneakz`}>All Sneakers</Link>
        </Button>
        <Navbar.Brand>
          <img
            className="hero"
            onClick={returnHome}
            src={hero}
            alt="hero"
            width="400px"
            height="200px"
          />
        </Navbar.Brand>
        <Button variant="outline-danger" className="sneaker-new-button">
          <Link to="/sneakz/new">New Sneaker</Link>
        </Button>
        <Button variant="outline-danger" className="user-profile-button">
          <Link to="/userprofile">User Profile</Link>
        </Button>
        <Button variant="outline-danger" className="cart-button">
          <Link to="/sneakz/cart">
            🛒 <Badge bg="danger">{cartItems.length}</Badge>
          </Link>
        </Button>
      </Navbar>
    </div >)
    }
    </>
  );
};
