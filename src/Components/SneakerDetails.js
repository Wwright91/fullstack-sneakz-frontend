import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "./DeleteConfirmation";
// import { AddItem } from "./AddItem";
import { Review } from "./Review";
// import { Cart } from "./Cart";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { set } from "immer/dist/internal";
// import { addToCart } from "../redux/cart.slice";
// import store from "../redux/store";

import { Reviews } from "./Reviews";

const API = process.env.REACT_APP_API_URL;

export const SneakerDetails = ({ cartItems, setCartItems, itemAdded, setItemAdded }) => {
  const [sneaker, setSneaker] = useState([]);
  const [show, setShow] = useState(false);
  // const [itemAdded, setItemAdded] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, brand, price, used, img } = sneaker;
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false)
const [success, unsuccessful] = useState(false)


  useEffect(() => {
    axios
      .get(`${API}/sneakz/${id}`)
      .then((res) => {
        // console.log(res.data);
        setSneaker(res.data);
      })
      .catch((c) => {
        navigate("/404");
        console.error("catch", c)
      });
  }, [id, navigate]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const addToCart = (e, sneaker) => {
    console.log(e.target.id)
    console.log(cartItems)

    let alreadyInCart = cartItems.map(({ id }) => Number(id))
    console.log(alreadyInCart)
    console.log(sneaker.id)

    if (!alreadyInCart.includes(Number(e.target.id))) {
      console.log("not added")
      
      // setCartItems([...cartItems, sneaker])
      // setItemAdded(!itemAdded)

      //*********** SET LOADING STATE FOR BUTTON */
      setLoading(true)
      setTimeout(() => {
        setCartItems([...cartItems, sneaker])
        // setLoading(true)
        axios
          .post(`${API}/sneakz/cart`, { sneaker_id: id })
          .then(() => {
            //  console.log("added to backend")
            // navigate(`/sneakz`);
            window.location.reload()
            // setLoading(true)
            // unsuccessful(!success)
          })
          .catch((c) => {
            navigate("/404");
            console.error("catch", c)
          });
      }, 3000

      )
      // document.getElementById(e.target.id).disabled = true;
      // unsuccessful(!success)
    }
    else {
      // unsuccessful(!success)
      console.log("in cart already")
    }
  }

  return (
    <div className="card-body text-center">
      <article className="sneaker-details">
        {/* <AddItem itemAdded={itemAdded} addToCart={addToCart} /> */}
        <Button id={id}
          onClick={(e) =>  addToCart(e, sneaker)}
          className="add-item-details"
          variant={!loading ? "danger" : "warning"}
        >
          {!success && !loading ? "Add To Cart" : "Adding To Cart..." }
        </Button>
        <h3>{name}</h3>
        <h5>{brand}</h5>
        <img src={img} alt={name} width="300px" height="200px" />
        <h3>
          ${price} {used ? "Used" : "Brand New"}
        </h3>
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
        {/* <Reviews /> */}
      </article>
      <Reviews/>
    </div>
  );
};
