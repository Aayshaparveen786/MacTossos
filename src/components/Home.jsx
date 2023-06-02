import React from "react";
import "./style.css";
import Mealitems from "./mealItems";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="Kitchen">
        <Navbar />
        <Mealitems />
        <Footer />
      </div>
    </>
  );
};

export default Home;
