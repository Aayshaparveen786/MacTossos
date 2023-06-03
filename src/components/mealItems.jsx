/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getMeal, addFavorite } from "../redux/slice/mealSlice";
import "./style.css";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { Skeleton, Stack } from "@mui/material";
import MealSkeleton from "./mealSkeleton";
const Mealitems = () => {
  // const { mealdetails, isLoading } = useSelector(
  //   (state) => state.mealdetails
  // );
  // console.log("state", mealdetails);
  const mealdetails = useSelector((state) => state.mealdetails);
  console.log("data", mealdetails);

  const isLoading = useSelector((state) => state.mealdetails.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isLoading, setisLoading] = useState();
  useEffect(() => {
    dispatch(getMeal());
    // console.log("State", mealdetails);
  }, []);

  // const [isFavorite, setFavorite] = useState();

  // console.log("favorite", isFavorite);

  // const toggleFavorite = (item) => {
  //   item.isFavorite = !item.isFavorite;
  //   dispatch(addFavorite(item));
  // };

  const toggleFavorite = (item) => {
    const updatedItem = {
      ...item,
      isFavorite: !item.isFavorite,
    };
    dispatch(addFavorite(updatedItem));
  };
  if (isLoading) {
    console.log("isLoading", isLoading);
    // console.log("mealdetails", mealdetails);
    return (
      <>
        <h1>Loading....</h1>;
        <div className="meal-container">
          <MealSkeleton />
          <MealSkeleton />
          <MealSkeleton />
          <MealSkeleton />
        </div>
      </>
    );
  }

  // const handleToggleFavorite = (item) => {
  //   dispatch(addFavorite(item));
  // };

  return (
    <div className="main-container">
      <div className="heading-box">
        <h2 className="food-heading">Food Items</h2>
      </div>

      <div className="meal-container">
        {mealdetails?.data?.meals?.map((item, index) => (
          <div key={index} className="food-items">
            <ul>
              <li onClick={() => navigate(`/${item.idMeal}`)}>
                <img src={item.strMealThumb} />
              </li>
              <div
                className={`isFavorite ${item.isFavorite ? "active" : ""}`}
                onClick={() => toggleFavorite(item)}
                // onClick={() => setFavorite(!isFavorite)}

                // onClick={() =>
                //   dispatch(addFavorite(item), setFavorite(!isFavorite))
                // }
              >
                <Favorite
                  sx={{
                    cursor: "pointer",
                    "&.MuiSvgIcon-root": {
                      fontSize: "1.5rem",
                    },
                  }}
                />
              </div>
              {/* <div
              className={`isFavorite ${item.isFavorite ? "active" : ""}`}
              onClick={() => handleToggleFavorite(item)}
            >
              {item.isFavorite ? <Favorite /> : <FavoriteBorder />}
            </div> */}
              <br />
              <li>Name: {item.strMeal}</li>
              <br />
              <li>Categroy: {item.strCategory}</li>
              <br />
              <li>Area: {item.strArea}</li>
              <br />
              Ingredient: {item.strIngredient1}, {item.strIngredient2},<br />
              {item.strIngredient3}, {item.strIngredient4}
              {/* <button className="add-btn" onClick={()=> dispatch(addItems(setCount(count + 1)))}> */}
              {/* <GrAdd className="add-icon"/> */}
              {/* <button className="add-btn" onClick={() => handleAddToCard(e)}> */}
              {/* <button onClick={() => dispatch(addToCart({}))}>Add</button> */}
              <button
                className="add-btn"
                onClick={() => dispatch(addToCart(item))}
              >
                Add
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mealitems;
{
  /* <img src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"/> */
}
{
  /* <img src="https://www.themealdb.com/images/ingredients/Lime-Small.png"/> */
}
{
  /* <button onClick={(e) => dispatch(getMeal())}>Show Meals</button> */
}

{
  /* {card &&
          card.meals.map((e) => ( */
}
{
  /* image: {e.strMealThumb} */
}
{
  /* <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview"/> */
}
{
  /* <img src="https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg"/> */
}
{
  /* <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg"/> */
}
