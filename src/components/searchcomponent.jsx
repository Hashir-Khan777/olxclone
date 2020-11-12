import React from "react";
import "../css/searchcomponent.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Post } from "../store/action/post";
import { connect } from "react-redux";

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

  var post_item = {
    image: props.image,
    price: props.price,
    para: props.para,
    place: props.place,
    date: props.date,
  };

  return (
    <div className="search_component">
      <div className="search_card">
        <div
          className="search_card_content"
          id={props.id}
          onClick={(post_item) => props.post(post_item)}
        >
          <div className="card_image">
            <figure>
              <img src={props.image} alt="" />
            </figure>
          </div>

          <div className="card_content">
            <p className="price">{props.price}</p>
            <p className="card_para">{props.para}</p>
          </div>

          <div className="card_date">
            <p className="order_place">{props.place}</p>
            <p className="date">{props.date}</p>
          </div>
        </div>

        <button className="heart" onClick={(e) => like(e)}>
          <FavoriteBorderIcon className="heart_icon" />
        </button>
        <button className="filled_heart none" onClick={(e) => dislike(e)}>
          <FavoriteIcon className="filled_heart_icon" />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  current_post: state.current_post,
});

const mapDispatchToProps = (dispatch) => ({
  post: (post_item) => dispatch(Post(post_item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
