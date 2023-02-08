import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Table } from "react-bootstrap";
import { Sneaker } from "./Sneaker";

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

  return (
    <div>
          <h1 className="text-center">Check Out Our Collection</h1>
          <br/>
      <section>
        {/* <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Color</th>
              <th>Used</th>
            </tr>
          </thead>
          <tbody>
            {sneakers.map((sneaker) => {
              return <Sneaker key={sneaker.id} sneaker={sneaker} />;
            })}
          </tbody>
        </Table> */}
              
              <Container className="sneakers-index">
                  {/* <Card> */}
                  {sneakers.map((sneaker) => {
              return <Sneaker key={sneaker.id} sneaker={sneaker} />;
            })}
                  {/* </Card> */}
              </Container>
      </section>
    </div>
  );
};
