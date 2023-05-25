import React from "react";
import "./style.css"
import Mealitems from "./mealItems";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div className="Kitchen">
        {/* <div className="Kitchen-heading">
          <h2 className="heading">Kitchens</h2>
          <p className="sub-heading">Mactassos The Fort</p>
          <NavLink to="/Search">
            <button className="Search-btn">Search Items</button>
          </NavLink>
        </div> */}
        <Navbar/>
        <Mealitems/>
      </div>
    </>
  );
};

export default Home;
