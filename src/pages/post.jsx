import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "../css/post.css";
import { Link } from "react-router-dom";
import PostCategories from "../components/PostCategories";
import PostFooter from "../components/PostFooter";
import "../css/mediaquery.css";

const Post = () => {
  return (
    <div className="post_item">
      <header className="post_item_header">
        <div className="header_post_logo">
          <KeyboardBackspaceIcon className="back_post_icon" />
          <h1 className="post_logo">
            <Link to="/" className="post_logo_svg">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                className="post_svg"
                fillRule="evenodd"
              >
                <path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </Link>
          </h1>
        </div>
      </header>

      <div className="post_your_item">
        <h1 className="ad_post_heading">post your ad</h1>
        <div className="post_categories">
          <h3 className="post_categories_heading">choose a category</h3>
          <PostCategories />
        </div>
      </div>

      <div className="end_post_footer">
        <PostFooter />
      </div>
    </div>
  );
};

export default Post;
