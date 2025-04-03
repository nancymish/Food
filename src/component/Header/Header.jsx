import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.header_img1})` }}
    >
      <div className="header-content">
        <h1>order your favourite food here</h1>
        <p>
          Integrate the food ordering system in your restaurant and grab the
          future. our restaurant online ordering software is capable enough to
          serve your purposes successfully.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
