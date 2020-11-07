import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";
import Chat from "../pages/chat";
import Post from "../pages/post";
import Openit from "../pages/openit";

function Approuter() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/post/item" component={Post} />
      <Route exact path={"/open/"} component={Openit} />
    </Router>
  );
}

export default Approuter;
