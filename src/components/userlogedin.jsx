import React from "react";
import "../css/userlogedin.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import firebase from "firebase";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AssignmentIcon from "@material-ui/icons/Assignment";
import WebIcon from "@material-ui/icons/Web";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import TuneIcon from "@material-ui/icons/Tune";
import GetAppIcon from "@material-ui/icons/GetApp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function UserLogedIn(props) {
  firebase
    .database()
    .ref("/")
    .on("child_added", (data) => {
      document.querySelector(".login").style.display = "none";
      document.querySelector(".search_input_box").style.width = "500px";
      document.querySelector(".firebase_id").setAttribute("id", data.val().uid);
    });
  function see_panel() {
    document.querySelector(".user_panel").classList.toggle("panel_block");
  }
  function log_out() {
    firebase
      .database()
      .ref("/")
      .child(document.querySelector(".firebase_id").id)
      .remove();
    document
      .querySelector(".firebase_id")
      .parentElement.parentElement.parentElement.parentElement.parentElement.remove();

      document.querySelector(".login").style.display = "block";
      document.querySelector(".search_input_box").style.width = "700px";
  }
  let user = props.current_user;

  return (
    <ul className="user_loged_in">
      <li className="chat_with_olx">
        <Link to="/chat">
          <ChatBubbleOutlineRoundedIcon className="chat_icon" />
        </Link>
      </li>

      <li className="notification">
        <NotificationsNoneRoundedIcon className="notification_icon" />
      </li>

      <li className="user_photo">
        <div className="open_panel" onClick={() => see_panel()}>
          <div className="photo_url">
            <img src={user.photo} alt="" className="user_photo_url" />
          </div>
          <ExpandMoreIcon className="user_panel_icon" />
        </div>
        <div className="user_panel">
          <div className="panel">
            <p className="hello">Hello,</p>
            <div className="panel_photo">
              <div className="photo_url panel_url">
                <img src={user.photo} alt="" className="panel_photo_url" />
              </div>
              <div className="panel_info">
                <h2 className="panel_user_name"> {user.name} </h2>
                <p className="profile_edit">View and edit your profile</p>
              </div>
            </div>
            <hr />
            <ul className="panel_list">
              <li className="panel_item">
                <LibraryBooksIcon className="panel_icon" />
                My Ads
              </li>
              <li className="panel_item">
                <AssignmentIcon className="panel_icon" />
                Buy Business Packages
              </li>
              <li className="panel_item">
                <WebIcon className="panel_icon" />
                Bought Packages and Billing
              </li>
              <hr />
              <li className="panel_item">
                <HelpOutlineIcon className="panel_icon" />
                Help
              </li>
              <li className="panel_item">
                <TuneIcon className="panel_icon" />
                Setings
              </li>
              <hr />
              <li className="panel_item">
                <GetAppIcon className="panel_icon" />
                Install OLX Lite App
              </li>
              <hr />
              <li className="panel_item firebase_id" onClick={() => log_out()}>
                <ExitToAppIcon className="panel_icon" />
                Logout
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  current_user: state.current_user,
});

export default connect(mapStateToProps, null)(UserLogedIn);
