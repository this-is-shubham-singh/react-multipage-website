import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="maincontainer">
        <NavLink to="/" className="logolink">
          REACT WEBSITE
        </NavLink>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
