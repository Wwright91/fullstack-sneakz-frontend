import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "./DeleteConfirmation";
import { Review } from "./Review";

const API = process.env.REACT_APP_API_URL;

export const SneakerDetails = () => {
  const [sneaker, setSong] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, brand, price, used, img } = sneaker;
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/sneakz/${id}`)
      .then((res) => {
        console.log(res.data);
        setSong(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, [id]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="card-body text-center">
      <article className="sneaker-details">
        <h3>{name}</h3>
        <h5>{brand}</h5>
              <img src={img} alt={name} width="300px" height="200px"/>
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
              <Review/>
      </article>
    </div>
  );
};
