import React from "react";
import "../css/categories.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Categories(props) {
  return (
    <div className="header_categories_section">
      <div className="categories">
        <p className="all_categories">
          ALL CATEGORIES <ExpandMoreIcon className="category_expand" />
        </p>
        <ul className="category_list">
          <li className="category_item">Mobile Phones</li>
          <li className="category_item">Cars</li>
          <li className="category_item">Motorcycles</li>
          <li className="category_item">Houses</li>
          <li className="category_item">TV-Video-Audio</li>
          <li className="category_item">Tablets</li>
          <li className="category_item">Land & Plots</li>
        </ul>
      </div>

      <div className="header_image" id={props.id}>
      </div>
    </div>
  );
}

export default Categories;
