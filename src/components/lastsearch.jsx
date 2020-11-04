import React from "react";
import "../css/lastsearch.css";
import SearchComponent from "./searchcomponent";
import { Link } from "react-router-dom";
import Olx1 from "../images/olx1.jpg";
import Olx2 from "../images/olx2.jpg";
import Olx3 from "../images/olx3.jpg";
import Olx4 from "../images/olx4.jpg";
import Olx5 from "../images/olx5.jpg";

function LastSearch() {
  return (
    <div className="last_search">
      <div className="search_heading">
        <p>Based on your last search</p>
        <Link to="/" className="search_link">
          View more
        </Link>
      </div>

      <div className="searches">
        <SearchComponent date="jan 21" image={Olx1} />
        <SearchComponent date="dec 19" image={Olx2} />
        <SearchComponent date="feb 22" image={Olx3} />
        <SearchComponent date="jan 28" image={Olx4} />
        <SearchComponent date="mar 21" image={Olx5} />
      </div>
    </div>
  );
}

export default LastSearch;
