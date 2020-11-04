import React from "react";
import "../css/login.css";
import "../css/mediaquery.css";
import Login1 from "../images/login1.png";
import Login2 from "../images/login2.png";
import Login3 from "../images/login3.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { login_with_facebook } from "../store/action/facebook";
import { login_with_google } from "../store/action/google";

function Login(props) {
  function user_close() {
    document.querySelector(".login_in_olx").style.display = "none";
  }

  return (
    <div className="login_in_olx">
      <div className="login_yourself">
        <div className="close_login">
          <button className="user_close" onClick={() => user_close()}>
            <CloseIcon className="close_icon" />
          </button>
        </div>

        <div className="login_slider">
          <div className="slider_for_olx">
            <div className="login_slides login_slide_1">
              <div className="login_slide_image">
                <img src={Login1} alt="" id="login1" />
              </div>
              <div className="login_slide_content">
                Help make OLX safer place to buy and sell
              </div>
            </div>

            <div className="login_slides login_slide_2">
              <div className="login_slide_image">
                <img src={Login2} alt="" id="login2" />
              </div>
              <div className="login_slide_content">
                Contact and close deals faster
              </div>
            </div>

            <div className="login_slides login_slide_3">
              <div className="login_slide_image">
                <img src={Login3} alt="" id="login3" />
              </div>
              <div className="login_slide_content">
                Save all your favorite items in one place
              </div>
            </div>

            <div className="slider_buttons">
              <button className="left">
                <ChevronLeftIcon className="left_icon" />
              </button>

              <button className="right">
                <ChevronRightIcon className="right_icon" />
              </button>
            </div>
          </div>
        </div>

        <ul className="slider_label">
          <li className="label_item">
            <label htmlFor="login_label login1"></label>
          </li>
          <li className="label_item">
            <label htmlFor="login_label login2"></label>
          </li>
          <li className="label_item">
            <label htmlFor="login_label login3"></label>
          </li>
        </ul>
        <div className="login_authentication">
          <ul className="authentication">
            <li className="authentication_item">
              <button className="authentication_button">
                Continue with phone
              </button>
            </li>
            <li className="authentication_item">
              <button
                className="authentication_button"
                onClick={() => props.login_with_facebook()}
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fillRule="evenodd"
                >
                  <path d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path>
                </svg>
                Continue with facebook
              </button>
            </li>
            <li className="authentication_item">
              <button
                className="authentication_button"
                onClick={() => props.login_with_google()}
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fillRule="evenodd"
                >
                  <path d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM515.772 325.594c47.061-2.176 91.221 17.92 127.189 45.995-15.403 17.109-31.275 33.621-48.341 49.024-43.221-29.312-104.747-37.717-147.968-3.797-61.867 41.899-64.768 140.971-5.205 186.155 57.856 51.541 167.296 25.941 183.381-52.864-36.309-0.555-72.661 0-108.885-1.152-0.171-21.291-0.213-42.453-0.171-63.659 60.587-0.213 121.259-0.299 181.973 0.171 3.627 49.92-3.157 102.955-34.347 144.256-47.317 65.28-142.379 84.352-216.576 56.32-74.411-27.691-127.232-104.789-120.917-183.424 1.664-96.128 91.861-180.309 189.867-177.024z"></path>
                </svg>
                Continue with google
              </button>
            </li>
            <li className="authentication_item">
              <button className="authentication_button">
                Continue with email
              </button>
            </li>
          </ul>
        </div>

        <p className="personal_information">
          We won't share your personal details with anyone
        </p>

        <p className="privacy_policy">
          If you continue, you are accepting
          <a href="https://help.olx.com.pk/hc/en-us" target="_olxterms">
            {" "}
            OLX Temrs and Conditions
          </a>
          <a href="https://help.olx.com.pk/hc/en-us" target="_olxpolicy">
            {" "}
            and Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  login_with_facebook: () => dispatch(login_with_facebook()),
  login_with_google: () => dispatch(login_with_google()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
