import React from "react";
import { connect } from "react-redux";
import Olx18 from "../images/olx18.jpg";
import Header from "../components/header";
import Categories from "../components/categories";

const Openit = () => {
  return (
    <div className="open_item">
      <Header />
      <Categories />
      <h1>open</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current_post: state.current_post,
});

export default connect(mapStateToProps, null)(Openit);
