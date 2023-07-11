import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Help from "./components/helppage";
import Contactus from "./components/contactuspage";
import About from "./components/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route
        path="/about"
        element={
          <div>
            <Navbar />
            <About />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div>
            <Navbar />
            <Contactus />
          </div>
        }
      />
      <Route
        path="/help"
        element={
          <div>
            <Navbar />
            <Help />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
