import React from "react";
import Header from "../components/header";
import firebase from "firebase";
import Categories from "../components/categories";

const Chat = () => {
  firebase
    .database()
    .ref("/")
    .on("child_added", () => {
      document.querySelector(".login").style.display = "none";
      document.querySelector(".user_loged_in").style.display = "flex";
      document.querySelector(".search_input_box").style.width = "500px";
    });

  return (
    <div>
      <Header />
      <Categories id="image_none" />
      <h1>chat</h1>
    </div>
  );
};

export default Chat;
