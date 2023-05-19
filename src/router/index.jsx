import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/Home";
import CartItem from "../components/CartItems";
import FavoriteItem from "../components/FavoriteItems";
import Search from "../components/SearchItem";
const MainFram = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CartItem" element={<CartItem/>}/>
        <Route path="/FavoriteItem" element={<FavoriteItem/>}/>
        <Route path="/Search" element={<Search/>}/>

      </Routes>
    </>
  );
};

export default MainFram;
