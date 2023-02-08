// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Index } from "./Pages/Index";
import { Show } from "./Pages/Show";
import { New } from "./Pages/New";
import { FourOFour } from "./Pages/FourOFour";

import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sneakz" element={<Index />} />
            <Route path="/sneakz/:id" element={<Show />} />
            <Route path="/sneakz/new" element={<New />} />
            <Route/>
            <Route/>
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
