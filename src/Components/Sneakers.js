import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Sneaker } from "./Sneaker";
import { useNavigate, useParams } from "react-router-dom";
// import Pagination from "./Pagination";

const API = process.env.REACT_APP_API_URL;
let PageSize = 10;


export const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [filteredSneakers, setFilteredSneakers] = useState([]);

  let navigate = useNavigate()



  let uniqueShoeColor = [...new Map(sneakers.map((s) => [s.color, s])).keys()];
  // console.log("unique shoe", uniqueShoeColor);

  let uniqueShoeBrand = [...new Map(sneakers.map((s) => [s.brand, s])).keys()];
  // console.log("unique shoe", uniqueShoeBrand);

  useEffect(() => {
    axios
      .get(`${API}/sneakz`)
      .then((res) => {
        // console.log(res.data);
        setSneakers(res.data);
        setFilteredSneakers(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  const filteredColor = (e) => {
    // console.log(e.target.id);


    let filteredSneaker = sneakers.filter(
      ({ color }) => color.toLowerCase() === e.target.id.toLowerCase()
    );
    navigate({
      pathname: '/sneakz',
      search: `?color=${e.target.id}`,
    });

    // axios
    // .get(`${API}/sneakz?color=${e.target.id.toLowerCase()}`)
    // .then((res) => {
    //   // console.log(res.data);
    //   // setSneakers(res.data);
    //   setFilteredSneakers(res.data);
    // })
    // .catch((c) => console.warn("catch", c));
    // console.log(filteredSneaker);

    setFilteredSneakers(filteredSneaker);
  };

  const filteredBrand = (e) => {
    console.log(e.target.id);
    console.log(window.location.search)

    let filteredSneaker = sneakers.filter(
      ({ brand }) => brand.toLowerCase() === e.target.id.toLowerCase()
    );
    console.log(filteredSneaker);
    navigate({
      pathname: '/sneakz',
      search: `?brand=${e.target.id}`,
    });

    setFilteredSneakers(filteredSneaker);
  };

  return (
    <div>
      <h1 className="text-center">Check Out Our Collection</h1>
      <br />
      {/* <h3>Results For {color} Sneakers</h3> */}
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
