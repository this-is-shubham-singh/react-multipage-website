import React from "react";
import { NavLink } from "react-router-dom";
import "./Herosection.css";
import { Useglobalcontext } from "../Context.jsx";

const Herosection = () => {
  const { name, image, smallheading, description } = Useglobalcontext();
  return (
    <div className="maindiv">
      <div className="bothitemsdiv">
        <div className="left-content">
          <p className="smallheading">{smallheading}</p>
          <h1 className="h1tag">{name}</h1>
          <p className="description">{description}</p>
          <button>
            <NavLink className="buttonlink" to="/contact">
              Contact us
            </NavLink>
          </button>
        </div>
        <img className="homeimage" src={image} />
      </div>
    </div>
  );
};

export default Herosection;
