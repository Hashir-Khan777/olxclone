import React from "react";
import "../css/searchcomponent.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SearchComponent(props) {
  const like = (e) => {
    if (document.querySelector(".user_loged_in").style.display === "flex") {
      e.target.parentElement.classList.add("none");
      e.target.parentElement.nextElementSibling.classList.remove("none");
    } else {
      document.querySelector(".login_in_olx").style.display = "flex";
    }
  };

  const dislike = (e) => {
    e.target.parentElement.parentElement.classList.add("none");
    e.target.parentElement.parentElement.previousElementSibling.classList.remove(
      "none"
    );
  };

  return (
    <div className="search_component">
      <div className="search_card" id={props.id}>
        <div className="card_image">
          <figure>
            <img src={props.image} alt="" />
            <button className="heart" onClick={(e) => like(e)}>
              <FavoriteBorderIcon className="heart_icon" />
            </button>
            <button className="filled_heart none" onClick={(e) => dislike(e)}>
              <FavoriteIcon className="filled_heart_icon" />
            </button>
          </figure>
        </div>

        <div className="card_content">
          <p className="price">Rs 8,750</p>
          <p className="card_para">
            Store racks, Warehouse Storage rack, Slotted Angle Adjustable Rack
          </p>
        </div>

        <div className="card_date">
          <p className="order_place">{props.place}</p>
          <p className="date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
