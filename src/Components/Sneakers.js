import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Sneaker } from "./Sneaker";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [filteredSneakers, setFilteredSneakers] = useState([]);

  let navigate = useNavigate();

  let uniqueShoeColor = [...new Map(sneakers.map((s) => [s.color, s])).keys()];

  let uniqueShoeBrand = [...new Map(sneakers.map((s) => [s.brand, s])).keys()];

  useEffect(() => {
    axios
      .get(`${API}/sneakz`)
      .then((res) => {
        setSneakers(res.data);
        setFilteredSneakers(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  const filteredColor = (e) => {
    let filteredSneaker = sneakers.filter(
      ({ color }) => color.toLowerCase() === e.target.id.toLowerCase()
    );
    navigate({
      pathname: "/sneakz",
      search: `?color=${e.target.id}`,
    });
    setFilteredSneakers(filteredSneaker);
  };

  const filteredBrand = (e) => {
    let filteredSneaker = sneakers.filter(
      ({ brand }) => brand.toLowerCase() === e.target.id.toLowerCase()
    );
    console.log(filteredSneaker);
    navigate({
      pathname: "/sneakz",
      search: `?brand=${e.target.id}`,
    });

    setFilteredSneakers(filteredSneaker);
  };

  return (
    <div>
      <h1 className="text-center">Check Out Our Collection</h1>
      <br />
      <div className="dropdown-buttons">
        <DropdownButton variant="secondary" title="Choose A Color">
          <Dropdown.Item>
            {uniqueShoeColor.map((color) => (
              <li key={color} onClick={filteredColor} id={color}>
                {color.toUpperCase()}
              </li>
            ))}
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton variant="secondary" title="Choose A Brand">
          <Dropdown.Item>
            {uniqueShoeBrand.map((brand) => (
              <li key={brand} onClick={filteredBrand} id={brand}>
                {brand.toUpperCase()}
              </li>
            ))}
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <section>
        <Container className="sneakers-index">
          {filteredSneakers.map((sneaker) => {
            return <Sneaker key={sneaker.id} sneaker={sneaker} />;
          })}
        </Container>
      </section>
    </div>
  );
};
