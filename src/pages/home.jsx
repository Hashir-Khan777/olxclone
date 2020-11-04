import React from "react";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Header from "../components/header";
import LastSearch from "../components/lastsearch";
import Login from "../components/login";
import Recommendations from "../components/recommendations";
import Top from "../components/top";

function Home() {
  return (
    <div className="home">
      <Header />
      <Categories />
      <LastSearch />
      <Recommendations />
      <Footer />
      <Top />
      <Login />
    </div>
  );
}

export default Home;
