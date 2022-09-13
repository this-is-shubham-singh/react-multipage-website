import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="errorcontainer">
      <img src="./images/error.png" className="errorimage" alt="image" />
      <button>
        <NavLink className="errorbutton" to="/">
          GO BACK
        </NavLink>
      </button>
    </div>
  );
};

export default Error;
