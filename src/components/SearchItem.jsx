import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GiFoodTruck } from "react-icons/gi";
import "./Search.css";
import FoodItem from "./FoodItem";
// import ReacipeIndex from "./RecipeIndex";
const Search = () => {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  // const setIndex=(alpha)=>{
  //     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  // }
  return (
    <>
      <div className="main">
        <div className="search-heading">
          <GiFoodTruck color="black" size="5rem" />
          <h1>Search Your Food Recipe</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="container">
          {show ? <FoodItem data={item} /> : "Not Found"}
        </div>
        {/* <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div> */}
      </div>
    </>
  );
};
export default Search;
