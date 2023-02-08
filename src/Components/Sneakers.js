import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/sneakz`)
      .then((res) => {
        console.log(res.data);
        setSneakers(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return <div>Sneakers</div>;
};
