import React from "react";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderImage from "../components/headerimage";
import LastSearch from "../components/lastsearch";
import Login from "../components/login";
import Recommendations from "../components/recommendations";
import Top from "../components/top";

function Home() {
  return (
    <div className="home">
      <Header />
      <Categories />
      <HeaderImage />
      <LastSearch />
      <Recommendations />
      <Footer />
      <Top />
      <Login />
    </div>
  );
}

export default Home;
