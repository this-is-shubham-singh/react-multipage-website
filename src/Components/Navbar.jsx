import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <ul className="ultag">
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
