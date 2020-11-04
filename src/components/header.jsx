import React from "react";
import "../css/header.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import UserLogedIn from "./userlogedin";
import { connect } from "react-redux";

function Header() {
  window.addEventListener("load", function () {
    document.querySelector(".select_option").value = "Pakistan";
  });

  function expand() {
    document.querySelector(".option_section").classList.toggle("display");
    document.querySelector(".expand").classList.toggle("rotate");
    document.querySelector(".select_option").classList.toggle("border");
  }

  function login() {
    document.querySelector(".login_in_olx").style.display = "flex";
  }

  return (
    <div className="header">
      <div className="fixed_navbar">
        <Link to="/" className="logo">
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            className="logo_svg"
            fillRule="evenodd"
          >
            <path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </Link>

        <div className="select_box">
          <div className="select_input_icon">
            <SearchIcon className="select_box_search" />
            <input
              type="text"
              className="select_option"
              placeholder="Search city, area or local"
            />
            <ExpandMoreIcon className="expand" onClick={() => expand()} />
          </div>

          <div className="option_section">
            <p>RECENT LOCATIONS</p>
            <ul className="recent_options">
              <li className="recent_option_item">
                <LocationOnIcon className="location" /> Karachi
              </li>
              <li className="recent_option_item">
                <LocationOnIcon className="location" /> Sindh
              </li>
              <li className="recent_option_item">
                <LocationOnIcon className="location" /> Punjab
              </li>
            </ul>
            <p>POPULAR LOCATIONS</p>
            <ul className="popular_options">
              <li className="popular_option_item">
                <LocationOnIcon className="location" /> Punjab
              </li>
              <li className="popular_option_item">
                <LocationOnIcon className="location" /> Islamabad Capital
                Territory
              </li>
              <li className="popular_option_item">
                <LocationOnIcon className="location" /> Sindh
              </li>
              <li className="popular_option_item">
                <LocationOnIcon className="location" /> Khyber PakhtunKhwa
              </li>
            </ul>
          </div>
        </div>

        <div className="search_box">
          <input
            type="text"
            className="search_input_box"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <SearchIcon className="search_icon" />
        </div>

        <div className="user_log_in">
          <UserLogedIn />
        </div>

        <div className="header_buttons">
          <button className="login" onClick={() => login()}>
            Login
          </button>
          <Link to="/" className="sell">
            +SELL
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(Header);
