import React, { useEffect, useState } from "react";
import "./mealItems.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getMeal } from "../redux/slice/mealSlice";
import FoodList from "./FoodList";

const Search = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [search, setSearch] = useState();
  console.log("search", search);
  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };


  const mealdetails = useSelector((state) => state.mealdetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeal());
    // console.log("State", mealdetails);
  }, []);
  return (
    <>
      <div className="main-box">
        <h2 className="search-heading">Search Items</h2>
      </div>

      <div className="searchBox">
        {/* <input
          type="search"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          //   onClick={searchRecipe}
        /> */}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            marginLeft: "27rem",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Food Item"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            // onClick={searchRecipe}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <FoodList/>
      </div>
    </>
  );
};

export default Search;
