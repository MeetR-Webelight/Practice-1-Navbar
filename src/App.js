import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Help from "./components/helppage";
import About from "./components/about";
import Contactus from "./components/contactuspage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}

export default App;
