import React from "react";
import "./style.css";
import Mealitems from "./mealItems";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div className="Kitchen">
        <Navbar />
        <Mealitems />
      </div>
    </>
  );
};

export default Home;
