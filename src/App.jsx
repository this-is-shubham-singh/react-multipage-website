import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
