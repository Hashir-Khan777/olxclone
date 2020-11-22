import React from "react";
import Olx18 from "../images/olx18.jpg";
import Header from "../components/header";
import Categories from "../components/categories";
import "../css/openit.css";
import FooterCategories from "../components/footercategories";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PhoneIcon from "@material-ui/icons/Phone";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Openit = () => {
  const ShowNumber = () => {
    document.querySelector(".seller_number_hide").style.display = "none";
    document.querySelector(".seller_number_show").style.display = "block";
    document.querySelector(".show_number").style.display = "none";
  };

  const likePost = (e) => {
    e.target.classList.add("none");
    e.target.nextElementSibling.classList.remove("none");
  };

  const unlikePost = (e) => {
    e.target.classList.add("none");
    e.target.parentElement.previousElementSibling.classList.remove("none");
  };

  return (
    <div className="open_item">
      <Header />
      <Categories />

      <div className="item">
        <div className="item_image_section">
          <section className="image_section">
            <div className="item_image">
              <img src={Olx18} alt="" />
            </div>
          </section>

          <section className="image_details">
            <div className="details">
              <h2>Details</h2>
              <ul className="dtail_list">
                <li className="detail_item">
                  <span>Make</span>
                  <span>Led T.V</span>
                </li>
                <li className="detail_item">
                  <span>Year</span>
                  <span>2020</span>
                </li>
                <li className="detail_item">
                  <span>Condition</span>
                  <span>New</span>
                </li>
              </ul>
            </div>

            <hr />

            <div className="description">
              <h2>Description</h2>
              <p>Tcl 55 inch indriod 2 year warranty</p>
            </div>
          </section>
        </div>

        <div className="item_seller_section">
          <section className="item_price">
            <div className="share_item">
              <div className="item_price_para">
                <h1>Rs 90,000</h1>
                <p>Tcl led 55 inch</p>
              </div>
              <div className="share">
                <ShareIcon className="share_icon" />
                <FavoriteBorderIcon
                  className="item_like"
                  onClick={(e) => likePost(e)}
                />
                <FavoriteIcon
                  className="unlike_item none"
                  onClick={(e) => unlikePost(e)}
                />
              </div>
            </div>

            <div className="item_place_date">
              <div className="item_place">
                <p>Bahawalpur, Punjab, Pakistan</p>
              </div>
              <div className="item_date">
                <p>Today</p>
              </div>
            </div>
          </section>

          <section className="seller_description">
            <h3>Seller description</h3>
            <div className="seller_info">
              <div className="personal_seller_info">
                <div className="seller_photo">
                  <img src={Olx18} alt="" />
                </div>
                <div className="seller_para">
                  <p className="seller_name">Hashir Khan</p>
                  <p className="seller_name">Member Since 2020</p>
                </div>
              </div>
              <div className="profile_button">
                <button className="go_to_profile">
                  <ChevronRightIcon className="profile_icon" />
                </button>
              </div>
            </div>

            <div className="chat_button">
              <button className="chat_with_user">Chat with seller</button>
            </div>

            <div className="phone_number">
              <p className="seller_phone">
                <PhoneIcon className="phone_icon" />
              </p>
              <p>
                <span className="seller_number_hide"> *********** </span>
                <span className="seller_number_show"> 03142595260 </span>
              </p>
              <p>
                <button className="show_number" onClick={() => ShowNumber()}>
                  Show number
                </button>
              </p>
            </div>
          </section>

          <section className="google_location">
            <h1 className="posted_heading">Posted in</h1>

            <p className="posted_location">Bahawalpur, Punjab, Pakistan</p>
          </section>
        </div>
      </div>

      <div className="open_footer">
        <FooterCategories />
      </div>
    </div>
  );
};

export default Openit;
