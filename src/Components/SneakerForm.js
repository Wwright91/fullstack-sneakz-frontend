import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export const SneakerForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    color: "",
    price: 0,
    img: "",
    used: false,
  });

  const handleTextChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setForm({ ...form, used: !form.used });
  };

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${API}/sneakz/${id}`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((error) => console.error("catch", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      axios
        .post(`${API}/sneakz`, form)
        .then(() => {
          navigate(`/sneakz`);
        })
        .catch((error) => console.error("catch", error));
    } else {
      axios
        .put(`${API}/sneakz/${id}`, form)
        .then(() => {
          navigate(`/sneakz/${id}`);
        })
        .catch((error) => console.error("catch", error));
    }
  };

  return (
    <div>
      <img
        src={
          form.img
            ? form.img
            : "https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"
        }
        alt={form.name ? form.name : "none"}
        height="100px"
        width="150px"
        className="form-img"
      />
      <br />
      <br />
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Sneaker Name:</FormLabel>
        <FormControl
          id="name"
          value={form.name}
          type="text"
          onChange={handleTextChange}
                  placeholder="Ex: Air Force"
                  required
        />
        <FormLabel htmlFor="brand">Sneaker Brand:</FormLabel>
        <FormControl
          id="brand"
          value={form.brand}
          type="text"
          onChange={handleTextChange}
          placeholder="Ex: Jordan, Adidas, Puma"
        />
        <FormLabel htmlFor="color">Sneaker Color:</FormLabel>
        <FormControl
          id="color"
          value={form.color}
          type="text"
          onChange={handleTextChange}
          placeholder="Ex: Black, Blue, Red"
              />
               <FormLabel htmlFor="price">Sneaker Price:</FormLabel>
        <FormControl
          id="price"
          value={form.price}
          type="number"
          onChange={handleTextChange}
          placeholder="Ex: Value Must Be Above $0"
        />
        <FormLabel htmlFor="img">Sneaker Image:</FormLabel>
        <FormControl
          id="img"
          value={form.img}
          type="text"
        //   pattern="https"
          onChange={handleTextChange}
          placeholder="Ex: http:// or https://"
        />
        <FormLabel htmlFor="used">Have These Sneakers Been Worn?:</FormLabel>
        <FormCheckInput
          id="used"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={form.used}
        />
        <br />
        <input type="submit" />
      </Form>
    </div>
  );
};
