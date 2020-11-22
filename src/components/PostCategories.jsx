import React from "react";
import "../css/postcategories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faDog,
  faGuitar,
  faCouch,
  faTshirt,
  faMobileAlt,
  faCarAlt,
  faTv,
  faMotorcycle,
  faIndustry,
  faConciergeBell,
  faBriefcase,
  faChild,
} from "@fortawesome/free-solid-svg-icons";

const PostCategories = () => {
  let mobiles = ["Tablets", "Accessories", "Mobile Phones"];
  let vehicles = [
    "Cars",
    "Cars on Installments",
    "Cars Accessories",
    "Spare parts",
    "Buses, vans & Trucks",
    "Rickshaw & Chingchi",
    "Other Vehicles",
    "Boats",
    "Tractors & Trailors",
  ];
  let property_for_sale = [
    "Land and Plots",
    "Houses",
    "Appartments and Flats",
    "Shops - Offices - Commercial Space",
    "Portions and Floors",
  ];
  let property_for_rent = [
    "Houses",
    "Appartments & Flats",
    "Portions & Floors",
    "Shops - Offices - Commercial Space",
    "Rooms",
    "Roommates & Paying Guests",
    "Vacation Rentals - Guest Houses",
    "Land & Plots",
  ];
  let electronics_and_home_appliences = [
    "Computers & Accessories",
    "TV-Video-Audio",
    "Cameras & Accessories",
    "Games & Entertainment",
    "Other Home Appliences",
    "Generators, UPS & Power Solutions",
    "Kitchen Appliences",
    "AC & Coolers",
    "Fridges & Freezers",
    "Washing Machines & Dryers",
  ];
  let bikes = [
    "Motorcycles",
    "Spare Parts",
    "Bicycles",
    "ATV & Quads",
    "Scooters",
  ];
  let business_industrial = [
    "Business for Sale",
    "Food & Resturants",
    "Trade & Industrial",
    "Construction & Heavy Machinery",
    "Agriculture",
    "Other Business & Industry",
    "Medical & Pharma",
  ];
  let services = [
    "Education & Classes",
    "Travel & Visa",
    "Car Rental",
    "Drivers & Taxi",
    "Web Development",
    "Other Services",
    "Electronics & Computer Repair",
    "Event Services",
    "Health & Beauty",
    "Maids & Domestic Help",
    "Movers & Packers",
    "Home & Office Repair",
    "Catering & Resturant",
    "Farm & Fresh Food",
  ];
  let jobs = [
    "Online",
    "Marketing",
    "Advertisement & PR",
    "Education",
    "Costumer Service",
    "Sales",
    "IT & Networking",
    "Hotels & Tourism",
    "Clerical & Administration",
    "Human Resources",
    "Accounting & Finance",
    "Manufacturing",
    "Medical",
    "Domestic Staff",
    "Part - Time",
    "Other Jobs",
  ];
  let animals = [
    "Fish & Aquariums",
    "Birds",
    "Hands & Aseel",
    "Cats",
    "Dogs",
    "Live Stock",
    "Horses",
    "Pet Food & Accessories",
    "Other Animals",
  ];
  let furnituer = [
    "Sofa & Chairs",
    "Beds & Wardrobes",
    "Home Decoration",
    "Tables & Dining",
    "Garden & Outdoor",
    "Painting & Mirros",
    "Rugs & Carpets",
    "Curtains & Blinds",
    "Ofice Furniture",
    "Other Household Items",
  ];
  let fashion = [
    "Accesseries",
    "Clohes",
    "Foot Wear",
    "Jwellery",
    "Make Up",
    "Skin & Hair",
    "Wathes",
    "Wedding",
    "Lawn & Pret",
    "Couture",
    "Other Fashion",
  ];
  let books_sports = [
    "Books & Magzines",
    "Musical Instruments",
    "Sports Equipment",
    "Gym & Fitness",
    "Other Hobbies",
  ];
  let kids = [
    "Kids Furniture",
    "Toys",
    "Prams & Walkers",
    "Swings & Slides",
    "Kids Bikes",
    "Kids Accessories",
  ];

  const showList = (e) => {
    let category_name = e.target.innerText;
    e.target.parentElement.classList.add("backgroung_color_change");
    let more_categories = document.querySelector(".more_categories_list");

    switch (category_name) {
      case "Mobiles":
        mobiles.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Vehicles":
        vehicles.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Property for Sale":
        property_for_sale.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "property for Rent":
        property_for_rent.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Electronics & Home Appliances":
        electronics_and_home_appliences.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Bikes":
        bikes.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Business, Indutrial & Agriculture":
        business_industrial.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Services":
        services.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Jobs":
        jobs.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Animals":
        animals.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Furniture & Home Decor":
        furnituer.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Fashion & Beauty":
        fashion.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Books, Sports & hobbies":
        books_sports.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      case "Kids":
        kids.map((value, key) => {
          let li = document.createElement("li");
          li.className = "post_categories_item";
          li.key = key;
          li.innerHTML = value;
          more_categories.appendChild(li);
        });
        break;
      default:
        return null;
    }
  };

  return (
    <div className="categories_item_list">
      <ul className="post_categories_list">
        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faMobileAlt} />
          <span className="post_categories_name"> Mobiles </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faCarAlt} />
          <span className="post_categories_name"> Vehicles </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
          >
            <path d="M814.546 512v-53.489h-50.036v-17.106h44.529v-50.23h-44.529v-15.749h50.036v-53.489h-118.69v190.061h118.69zM684.179 512v-53.489h-52.13v-136.571h-68.965v190.061h121.095zM452.306 395.52l-10.861 39.098h21.45l-10.59-39.098zM421.625 512h-67.335l65.707-190.061h67.879l65.707 190.061h-70.593l-8.417-29.051h-44.529l-8.417 29.051zM284.51 454.982c0 3.065-1.785 4.615-5.43 4.615-8.844 0-17.299-6.71-25.25-20.091l-49.145 26.609c1.978 5.43 4.849 10.783 8.571 16.135 3.685 5.352 8.533 10.629 14.507 15.787s13.498 9.349 22.535 12.607c9.037 3.258 18.929 4.888 29.595 4.888 22.613 0 40.65-5.547 54.031-16.563 13.421-11.054 20.091-25.95 20.091-44.8 0-9.969-2.56-18.773-7.603-26.453s-11.249-13.809-18.579-18.347c-7.33-4.499-14.662-8.494-21.992-11.791-7.37-3.374-13.575-6.593-18.618-9.774-5.081-3.181-7.603-6.284-7.603-9.387 0-3.258 1.901-4.888 5.702-4.888 3.995 0 7.873 1.746 11.675 5.159 3.801 3.451 6.866 7.525 9.231 12.218l48.33-27.694c-3.219-10.317-11.288-20.364-24.165-30.138-12.839-9.774-29.051-14.662-48.601-14.662-21.333 0-38.593 5.547-51.705 16.563-13.15 11.015-19.705 25.677-19.705 43.986 0 8.883 1.823 16.833 5.43 23.893 3.647 7.059 8.185 12.684 13.73 16.95 5.509 4.267 11.481 8.185 17.92 11.713 6.4 3.49 12.373 6.361 17.92 8.533 5.509 2.171 10.085 4.499 13.691 7.059 3.647 2.56 5.43 5.159 5.43 7.873zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path>
          </svg>
          <span className="post_categories_name"> Property for Sale </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
          >
            <path d="M706.21 385.164v126.836h64v-126.836h34.792v-49.649h-133.352v49.649h34.521zM557.189 512v-82.968l38.323 82.968h64.775v-176.485h-63.263v82.929l-38.361-82.929h-64.775v176.485h63.302zM478.759 512v-49.649h-46.39v-15.903h41.349v-46.662h-41.349v-14.623h46.39v-49.649h-110.157v176.485h110.157zM271.283 383.418v24.709h7.564c3.879 0 6.943-1.28 9.192-3.801s3.413-5.352 3.413-8.571c0-3.142-1.125-6.050-3.413-8.571-2.25-2.521-5.313-3.763-9.192-3.763h-7.603zM271.283 455.021v56.979h-62.022v-176.485h78.43c20.17 0 36.15 5.43 47.903 16.251 11.791 10.861 17.649 24.513 17.649 40.96 0 9.774-2.637 18.618-7.912 26.609-5.313 7.99-11.986 14.235-20.053 18.773l40.339 73.89h-69.352l-25.018-56.979zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path>
          </svg>
          <span className="post_categories_name"> property for Rent </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faTv} />
          <span className="post_categories_name">
            Electronics & Home Appliances
          </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faMotorcycle} />
          <span className="post_categories_name"> Bikes </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faIndustry} />
          <span className="post_categories_name">
            Business, Indutrial & Agriculture
          </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faConciergeBell} />
          <span className="post_categories_name"> Services </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faBriefcase} />
          <span className="post_categories_name"> Jobs </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faDog} />
          <span className="post_categories_name"> Animals </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faCouch} />
          <span className="post_categories_name"> Furniture & Home Decor </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faTshirt} />
          <span className="post_categories_name"> Fashion & Beauty </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faGuitar} />
          <span className="post_categories_name">Books, Sports & hobbies</span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>

        <li className="post_categories_item" onClick={(e) => showList(e)}>
          <FontAwesomeIcon icon={faChild} />
          <span className="post_categories_name"> Kids </span>
          <FontAwesomeIcon icon={faAngleRight} className="see_more_icon" />
        </li>
      </ul>

      <ul className="post_categories_list more_categories_list"></ul>
    </div>
  );
};

export default PostCategories;
