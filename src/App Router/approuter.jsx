import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";

function Approuter() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default Approuter;
