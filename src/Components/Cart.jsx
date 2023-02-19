import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button, Form, FormControl, FormLabel } from "react-bootstrap";

import SelectUSState from "react-select-us-states";

const API = process.env.REACT_APP_API_URL;

export const Cart = ({ cartItems }) => {
  let cartTotal =
    cartItems.length >= 2
      ? cartItems
          .map(({ price }) => price)
          .reduce((a, b) => Number(a) + Number(b), 0) * 0.8
      : cartItems
          .map(({ price }) => price)
          .reduce((a, b) => Number(a) + Number(b), 0);

  const deleteItem = (id) => {
    axios
      .delete(`${API}/sneakz/cart/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };

  const emptyCart = () => {
    axios
      .delete(`${API}/sneakz/cart`)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };

  const submitForm = (e) => {
    e.preventDefault();
    emptyCart();
    alert("Thank you for your purchase!");
  };

  return (
    <div className="cart-details">
      <Link to={`/sneakz`}>
        <Button variant="dark">Continue Shopping</Button>
      </Link>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <h1>Your Cart Is Empty!</h1>
      ) : (
        <>
          {" "}
          <div className="cart-items">
            {cartItems.map(({ id, img, name, brand, price }) => (
              <div key={id}>
                <Link to={`/sneakz/${id}`}>
                  <h4>{name}</h4>
                </Link>
                <h5>{brand}</h5>
                <Link to={`/sneakz/${id}`}>
                  <img src={img} alt={name} height="200px" width="250px" />
                </Link>

                <h4>$ {price}</h4>
                <div>
                  <Button onClick={() => deleteItem(id)} variant="secondary">
                    Remove Item
                  </Button>
                  <br />
                  <br />
                </div>
              </div>
            ))}
            {cartItems.length && <h2>Grand Total: $ {cartTotal.toFixed(2)}</h2>}
            <Button variant="danger" onClick={emptyCart}>
              Clear Cart
            </Button>{" "}
          </div>
          <div className="payment-info">
            <h2>Payment Info</h2>
            <Form onSubmit={submitForm}>
              <FormLabel htmlFor="firstname">First Name:</FormLabel>
              <FormControl
                id="firstname"
                type="text"
                placeholder="Ex: Bob"
                required
              />
              <FormLabel htmlFor="lastname"> Last Name:</FormLabel>
              <FormControl
                id="lastname"
                type="text"
                placeholder="Ex: Smith"
                required
              />
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormControl
                id="email"
                type="email"
                placeholder="example@domain.com"
                required
              />
              <FormLabel htmlFor="card-number">Card Number:</FormLabel>
              <FormControl
                id="card-number"
                type="text"
                maxLength="16"
                pattern="^[0-9]{16}"
                placeholder="16 digit card number no dashes"
                required
              />
              <FormLabel htmlFor="exp">EXP Date:</FormLabel>
              <FormControl
                id="exp"
                type="text"
                maxLength="4"
                pattern="^[0-9]{4}"
                placeholder="2 digit month 2 digit year"
                required
              />
              <FormLabel htmlFor="cvv">CVV:</FormLabel>
              <FormControl
                id="cvv"
                type="text"
                maxLength="3"
                pattern="^[0-9]{3}"
                placeholder="3 digit security number"
                required
              />
              <br />
              <h3>Shipping Address</h3>
              <FormLabel htmlFor="street-name">Street Name:</FormLabel>
              <FormControl
                id="street-name"
                type="text"
                placeholder="123 Park Lane"
                required
              />
              <FormLabel htmlFor="city">City:</FormLabel>
              <FormControl
                id="city"
                type="text"
                placeholder="Boston"
                required
              />
              <FormLabel htmlFor="state">
                State: <SelectUSState />
              </FormLabel>
              <br />
              <FormLabel htmlFor="price">Zip:</FormLabel>
              <FormControl
                id="zip"
                type="text"
                pattern="^[0-9]{5}"
                maxLength="5"
                placeholder="12345"
                required
              />
              <br />
              <input type="submit" />
            </Form>
          </div>
        </>
      )}
    </div>
  );
};
