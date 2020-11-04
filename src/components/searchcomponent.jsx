import React from "react";
import "../css/searchcomponent.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SearchComponent(props) {
  return (
    <div className="search_component">
      <div className="search_card" id={props.id}>
        <div className="card_image">
          <figure>
            <img src={props.image} alt="" />
            <button className="heart">
              <FavoriteBorderIcon className="heart_icon" />
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
