import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "../DeleteConfirmation";
import { Button } from "react-bootstrap";
import { Reviews } from "../Reviews/Reviews";

const API = process.env.REACT_APP_API_URL;

export const SneakerDetails = ({
  cartItems,
  setCartItems,
  itemAdded,
  setItemAdded,
}) => {
  const [sneaker, setSneaker] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, brand, price, used, img, size, color } = sneaker;

  let { id } = useParams();
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  let alreadyInCart = cartItems.map(({ id }) => Number(id));

  useEffect(() => {
    axios
      .get(`${API}/sneakz/${id}`)
      .then((res) => {
        setSneaker(res.data);
      })
      .catch((c) => {
        navigate("/404");
        console.error("catch", c);
      });
  }, [id, navigate]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const addToCart = (e, sneaker) => {
    document.getElementById(`${sneaker.id}`).disabled = cartItems[sneaker.id];

    if (!alreadyInCart.includes(Number(e.target.id))) {
      setLoading(!loading);
      setTimeout(() => {
        axios
          .post(`${API}/sneakz/cart`, { sneaker_id: id })
          .then(() => {
            setItemAdded((itemAdded) => ({
              itemAdded,
              [sneaker.id]: sneaker.id,
            }));
            setCartItems([...cartItems, sneaker]);
          })
          .catch((c) => {
            navigate("/404");
            console.error("catch", c);
          });
      }, 1500);
    }
  };

  return (
    <div className="card-body text-center">
      <article className="sneaker-details">
        <div
          className="sneaker-color"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <Button
          id={id}
          onClick={(e) => addToCart(e, sneaker)}
          className="add-item-details"
          variant={!itemAdded[sneaker.id] ? "danger" : "success"}
          disabled={itemAdded[sneaker.id]}
        >
          {!itemAdded[sneaker.id] ? "Add To Cart" : "In Cart"}
        </Button>
        <br />
        <br />
        <h3>{name}</h3>
        <h5>{brand}</h5>
        <img
          className="details-img"
          src={img}
          alt={name}
          width="300px"
          height="200px"
        />
        <br />
        <br />
        <h3>${price}</h3>
        <div className="sneaker-condition"> {used ? "Used" : "New"}</div>
        <div className="sneaker-size">{size}</div>
        <div className="d-flex show-buttons">
          <div>
            <button className="btn btn-dark" onClick={goBack}>
              Back
            </button>
          </div>
          <div>
            <Link to={`/sneakz/${id}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div>
            <ConfirmDelete
              id={id}
              navigate={navigate}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </div>
      </article>
      <Reviews />
    </div>
  );
};
