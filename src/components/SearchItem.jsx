// import React, { useEffect, useState } from "react";
// import "./mealItems.css";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import { useDispatch, useSelector } from "react-redux";
// import { getMeal, setSearchQuery } from "../redux/slice/mealSlice";
// import FoodList from "./FoodList";
// import { TextField } from "@mui/material";

// const Search = () => {
//   // const [url, setUrl] = useState(
//   //   "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
//   // );
//   // const [search, setSearch] = useState();
//   // console.log("search", search);
//   // const searchRecipe = (evt) => {
//   //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//   // };

//   // const [name, setName] = useState("Apple Frangipan Tart");
//   // const mealdetails = useSelector((state) => state.mealdetails);
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(getMeal(name));
//   //   // console.log("State", mealdetails);
//   // }, [name]);

//   const [searchText, setSearchText] = useState("");
//   const dispatch = useDispatch();
//   const handleSearch = () => {
//     dispatch(setSearchQuery(searchText));
//   console.log("search", searchText);

//   };
//   return (
//     <>
//       <div className="main-box">
//         <h2 className="search-heading">Search Items</h2>
//       </div>

//       <div className="searchBox">
//         <div>
//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         <FoodList />

//         {/* <input
//           type="search"
//           className="search-bar"
//           onChange={(e) => setSearch(e.target.value)}
//           //   onClick={searchRecipe}
//         /> */}
//         {/* <Paper
//           component="form"
//           sx={{
//             p: "2px 4px",
//             display: "flex",
//             alignItems: "center",
//             width: 400,
//             marginLeft: "27rem",
//           }}
//         >
//           <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Search Food Item"
//             inputProps={{ "aria-label": "search google maps" }}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <IconButton
//             type="button"
//             sx={{ p: "10px" }}
//             aria-label="search"
//             onClick={searchRecipe}
//           >
//             <SearchIcon />
//           </IconButton>
//         </Paper> */}

//         {/* <form onSubmit={(e) => e.preventDefault()}>
//           <TextField
//             type="text"
//             fullWidth
//             sx={{m:1, width: "55ch"}}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </form> */}
//       </div>
//     </>
//   );
// };

// export default Search;
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {GiFoodTruck} from "react-icons/gi"
import "./Search.css"
import FoodItem from "./FoodItem";
// import ReacipeIndex from "./RecipeIndex";
const Search = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    // const setIndex=(alpha)=>{
    //     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    // }
return (
    <>
        <div className="main">
            <div className="search-heading">
                <GiFoodTruck color="black"size="5rem"/>
                <h1>Search Your Food Recipe</h1>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ?<FoodItem data={item} /> :"Not Found"
                
                }
            </div>
            {/* <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div> */}
            
        </div>
    </>
)
}
export default Search;