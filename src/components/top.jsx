import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../css/top.css";

function Top() {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1700) {
      document.querySelector(".top_button").classList.add("block");
    } else {
      document.querySelector(".top_button").classList.remove("block");
    }
  });

  function go_top() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="go_to_top" onClick={() => go_top()}>
      <button className="top_button">
        <KeyboardArrowUpIcon className="top_icon" />
        Back to top
      </button>
    </div>
  );
}

export default Top;
