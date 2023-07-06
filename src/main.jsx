import React from "react";
import ReactDOM from "react-dom/client";
import { Journall } from "./Journall.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Journall />
  </Router>
);
