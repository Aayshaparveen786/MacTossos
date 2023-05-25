import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/Home";
import CartItem from "../components/CartItems";
import FavoriteItem from "../components/FavoriteItems";
import Search from "../components/SearchItem";
import SignIn from "../components/SignIn";
import About from "../components/About";
import Contact from "../components/Contact";
const MainFram = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CartItem" element={<CartItem />} />
        <Route path="/FavoriteItem" element={<FavoriteItem />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
};

export default MainFram;
