import React from "react";
import "../css/footer.css";
import PhoneApp from "../images/phone-app.jpg";
import App from "../images/appstore.png";
import Play from "../images/playstore.png";
import FooterCategories from "./footercategories";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_image">
          <img src={PhoneApp} alt="Footer" />
        </div>

        <div className="olx_app">
          <h1 className="olx_app_heading">TRY THE OLX APP</h1>
          <p className="olx_app_contant">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>

        <div className="stores">
          <p className="store_heading">GET YOUR APP TODAY</p>
          <a
            target="_appstore"
            href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"
          >
            <img src={App} alt="App store" />
          </a>
          <a
            target="_playstor"
            href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"
          >
            <img src={Play} alt="Play store" />
          </a>
        </div>
      </div>

      <div className="footer_about">
        <FooterCategories />
      </div>
    </div>
  );
}

export default Footer;
