// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { Home } from "./Pages/Home";
import { Index } from "./Pages/Index";
import { Show } from "./Pages/Show";
import { New } from "./Pages/New";
import { Edit } from "./Pages/Edit";
import { FourOFour } from "./Pages/FourOFour";
import { ShowCart } from "./Pages/ShowCart";

import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemAdded, setItemAdded] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/sneakz/cart`)
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar cartItems={cartItems} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sneakz" element={<Index />} />
            <Route
              path="/sneakz/cart"
              element={
                <ShowCart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/sneakz/new" element={<New />} />
            <Route
              path="/sneakz/:id"
              element={
                <Show
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  itemAdded={itemAdded}
                  setItemAdded={setItemAdded}
                />
              }
            />
            <Route
              path="/sneakz/color/:color"
              element={
                <Index
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  itemAdded={itemAdded}
                  setItemAdded={setItemAdded}
                />
              }
            />
            <Route
              path="/sneakz/brand/:brand"
              element={
                <Index
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  itemAdded={itemAdded}
                  setItemAdded={setItemAdded}
                />
              }
            />
            <Route path="/sneakz/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
