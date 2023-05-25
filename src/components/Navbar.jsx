import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Nav-container">

    <div className="Kitchen-heading">
      {/* <h2 className="heading">Kitchens</h2>
      <p className="sub-heading">Mactassos The Fort</p> */}
      <img src="./images/Mactassos-logo_white.png"/>
      </div>
      <div className="Search">
      <NavLink to="/Search">
        <button className="Search-btn">Search Items</button>
      </NavLink>
    </div>
    </div>
  );
};

export default Navbar;
