import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Appprovider from "./Context.jsx";

ReactDOM.render(
  <Appprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Appprovider>,

  document.getElementById("root")
);
