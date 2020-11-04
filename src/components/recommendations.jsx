import React from "react";
import "../css/recommendations.css";
import SearchComponent from "./searchcomponent";
import Olx6 from "../images/olx6.jpg";
import Olx7 from "../images/olx7.jpg";
import Olx8 from "../images/olx8.jpg";
import Olx9 from "../images/olx9.jpg";
import Olx10 from "../images/olx10.jpg";
import Olx11 from "../images/olx11.jpg";
import Olx12 from "../images/olx12.jpg";
import Olx13 from "../images/olx13.jpg";
import Olx14 from "../images/olx14.jpg";
import Olx15 from "../images/olx15.jpg";
import Olx16 from "../images/olx16.jpg";
import Olx17 from "../images/olx17.jpg";
import Olx18 from "../images/olx18.jpg";
import Olx19 from "../images/olx19.jpg";
import Olx20 from "../images/olx20.jpg";
import Olx21 from "../images/olx21.jpg";
import Olx22 from "../images/olx22.jpg";
import Olx23 from "../images/olx23.jpg";
import Olx24 from "../images/olx24.jpg";
import Olx25 from "../images/olx25.jpg";
import Olx26 from "../images/olx26.jpg";
import Olx27 from "../images/olx27.jpg";
import Olx28 from "../images/olx28.jpg";
import Olx29 from "../images/olx29.jpg";
import Olx30 from "../images/olx30.jpg";
import Olx31 from "../images/olx31.jpg";
import Olx32 from "../images/olx32.jpg";
import Olx33 from "../images/olx33.jpg";

function Recommendations() {
  return (
    <div className="recommendations">
      <div className="recommend_heading">
        <p>Fresh recommendations</p>
      </div>

      <div className="fresh_recommendations">
        <SearchComponent
          image={Olx6}
          id="border"
          place="Nazimabad, Karachi"
          date="oct 21"
        />
        <SearchComponent
          image={Olx7}
          id="border"
          place="Orangi town, Karachi"
          date="oct 29"
        />
        <SearchComponent
          image={Olx8}
          id="border"
          place="Saddar, Karachi"
          date="aug 20"
        />
        <SearchComponent
          image={Olx9}
          id="border"
          place="Karachi, Sindh"
          date="sep 29"
        />
        <SearchComponent
          image={Olx10}
          id="border"
          place="Lahore, Punjab"
          date="today"
        />
        <SearchComponent
          image={Olx11}
          id="border"
          place="Gujranwala, Punjab"
          date="feb 01"
        />
        <SearchComponent
          image={Olx12}
          id="border"
          place="Faisalabad, Punjab"
          date="Jan 29"
        />
        <SearchComponent
          image={Olx13}
          id="border"
          place="DHA Phase 5, Karachi"
          date="oct 22"
        />
        <SearchComponent
          image={Olx14}
          id="border"
          place="Korangi, Karachi"
          date="oct 29"
        />
        <SearchComponent
          image={Olx15}
          id="border"
          place="Malir, Karachi"
          date="oct 10"
        />
        <SearchComponent
          image={Olx16}
          id="border"
          place="Allama Iqbal Town, Lahoe"
          date="oct 09"
        />
        <SearchComponent
          image={Olx17}
          id="border"
          place="Blue Area, islamabad"
          date="mar 21"
        />
        <SearchComponent
          image={Olx18}
          id="border"
          place="jhand saddar, punjab"
          date="mar 09"
        />
        <SearchComponent
          image={Olx19}
          id="border"
          place="Taxila, punjab"
          date="oct 29"
        />
        <SearchComponent
          image={Olx20}
          id="border"
          place="gulsahan-e-mehran, Karachi"
          date="oct 02"
        />
        <SearchComponent
          image={Olx21}
          id="border"
          place="chatha bakhtawar, slamabad"
          date="oct 11"
        />
        <SearchComponent
          image={Olx22}
          id="border"
          place="Nichhra, lahore"
          date="apr 19"
        />
        <SearchComponent
          image={Olx23}
          id="border"
          place="empress road, lahore"
          date="may 19"
        />
        <SearchComponent
          image={Olx24}
          id="border"
          place="Abdullah haroon road, Karachi"
          date="jun 30"
        />
        <SearchComponent
          image={Olx25}
          id="border"
          place="shaheen town, rawalpindi"
          date="jun 29"
        />
        <SearchComponent
          image={Olx26}
          id="border"
          place="scheme 33, Karachi"
          date="jun 26"
        />
        <SearchComponent
          image={Olx27}
          id="border"
          place="hyderabad, sindh"
          date="jul 29"
        />
        <SearchComponent
          image={Olx28}
          id="border"
          place="fechs, islmabad"
          date="jan 03"
        />
        <SearchComponent
          image={Olx29}
          id="border"
          place="rahimyar khan, punjab"
          date="jan 31"
        />
        <SearchComponent
          image={Olx30}
          id="border"
          place="wahdat road, lahore"
          date="feb 01"
        />
        <SearchComponent
          image={Olx31}
          id="border"
          place="mardan, khyber pakhtunkhuwa"
          date="dec 30"
        />
        <SearchComponent
          image={Olx32}
          id="border"
          place="multan, punjab"
          date="dec 19"
        />
        <SearchComponent
          image={Olx33}
          id="border"
          place="gulbarg 3, lahore "
          date="feb 09"
        />
      </div>

      <div className="more">
        <button className="load">Load more</button>
      </div>
    </div>
  );
}

export default Recommendations;
