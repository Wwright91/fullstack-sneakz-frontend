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
import { addToCart } from "../redux/cart.slice";
// import store from "../redux/store";

const API = process.env.REACT_APP_API_URL;

export const SneakerDetails = ({ cartItems, setCartItems, itemAdded, setItemAdded }) => {
  const [sneaker, setSneaker] = useState([]);
  const [show, setShow] = useState(false);
  // const [cartItems, setCartItems] = useState([])
  // const [itemAdded, setItemAdded] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, brand, price, used, img } = sneaker;
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    axios
      .get(`${API}/sneakz/${id}`)
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, [id]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  // const addToCart = (sneaker) => {

    // cartCheck(sneaker)
    // e.preventDefault()
    // console.log("working");

    // if (!cartItems.length) {
    //   setCartItems([...cartItems, sneaker])
    // }

    // cartItems.map((s) => s.id === sneaker.id)

    // let addedAlready =
      
      // cartItems.map((c) => c.id)

    // console.log("added", addedAlready)

    // if (cartItems.map((c) => c.id !== sneaker.id)) {
    //   setItemAdded(!itemAdded)
    //   setCartItems([...cartItems, sneaker]);
    // }

    // if (!itemAdded) {
    //   // console.log("yes")
    //   setItemAdded(itemAdded)
    //   // setCartItems([...cartItems, sneaker]);
    // }

    // if (cartItems.map((cart) => cart.id !== sneaker.id)) {
    //   setCartItems([...cartItems, sneaker]);
    // }

    // if (!cartItems.map(({id}) => id === sneaker.id)) {
    //   setItemAdded(!itemAdded)
    // }

    // console.log("cart-details", cartItems)

  //   console.log(cartItems)
    
  //   if (!itemAdded) {
  //     setCartItems([...cartItems, sneaker]);
  //     setItemAdded(!itemAdded)
  //   }


  // };

  // const cartCheck = (sneaker) => {
  //   // if (cartItems.map((c) => c === sneaker)) {
  //   //   setItemAdded(itemAdded)

  //   if (cartItems.includes(sneaker)) {
      
  //     console.log("in cart")
  //   } else {
  //     setCartItems([...cartItems, sneaker]);
  //     setItemAdded(!itemAdded)
  //     console.log("not in cart")
  //   }
  // }

    // console.log(sneaker)

      // if (!itemAdded) {
      //   setCartItems([...cartItems, sneaker]);
      //   setItemAdded(!itemAdded)
      // }

    // }
  
  const updateCart = (sneaker) => {
    console.log(cart)

    let cartDetails = cart.length ? cart.map((c) => c.id) : []
      
    if (!cartDetails.includes(sneaker.id)) {
      dispatch(addToCart(sneaker))
      
      // setItemAdded(!itemAdded)

    }
  }




// .map((c) => c.id)
  console.log("cart-details", cartItems);
  console.log("sneaker", sneaker.id);

  return (
    <div className="card-body text-center">
      <article className="sneaker-details">
        {/* <AddItem itemAdded={itemAdded} addToCart={addToCart} /> */}
        <Button
          onClick={() =>  updateCart(sneaker)}
          className="add-item-details"
          variant={!itemAdded ? "danger" : "warning"}
        >
          {!itemAdded ? "Add To Cart" : "Remove From Cart"}
          {/* <Icon name = "arrow right" /> */}
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
        <Review />
      </article>
    </div>
  );
};
