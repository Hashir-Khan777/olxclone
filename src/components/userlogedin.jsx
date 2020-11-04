import React from "react";
import photo from "../images/olx18.jpg";
import "../css/userlogedin.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import firebase from "firebase";

function UserLogedIn() {
  firebase
    .database()
    .ref("/")
    .on("child_added", function (data) {
      var login_user_photo = data.val().photo;
      document
        .querySelector(".user_photo_url")
        .setAttribute("src", login_user_photo);

      document.querySelector(".user_loged_in").style.display = "flex";
      document.querySelector(".login").style.display = "none";
      document.querySelector(".search_input_box").style.width = "500px";
    });

  return (
    <ul className="user_loged_in">
      <li className="chat_with_olx">
        <ChatBubbleOutlineRoundedIcon className="chat_icon" />
      </li>

      <li className="notification">
        <NotificationsNoneRoundedIcon className="notification_icon" />
      </li>

      <li className="user_photo">
        <div className="photo_url">
          <img alt="" className="user_photo_url" />
        </div>
        <ExpandMoreIcon className="user_panel" />
      </li>
    </ul>
  );
}

export default UserLogedIn;
