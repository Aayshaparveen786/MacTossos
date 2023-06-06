/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getMeal,
  addFavorite,
  decrementQuantity,
  incrementQuantity,
} from "../redux/slice/mealSlice";
import "./style.css";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { Skeleton, Stack } from "@mui/material";
import MealSkeleton from "./mealSkeleton";
const Mealitems = ({ quantity = 0 }) => {
  console.log("quantity", quantity);
  //   (state) => state.mealdetails
  // const { mealdetails, isLoading } = useSelector(
  // );
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
  // const itemInCart = useSelector((state) => state.cart.items);

  // const itemInCart = useState((state) => state?.cart);
  // console.log("itemIncart", itemInCart);
  // const itemPresentInCart = itemInCart.find(
  //   (item) => item?.id == mealdetails?.data?.meals?.id
  // );
  // console.log("itemP", itemInCart);
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
        {/* <h1>Loading....</h1>; */}
        <div className="meal-container">
          <MealSkeleton />
          <MealSkeleton />
          <MealSkeleton />
          <MealSkeleton />
        </div>
      </>
    );
  }
  const getTotalQuantity = () => {
    let total = 0;
    // mealdetails.cart.forEach((item) => {
    mealdetails.data.meals.forEach((item) => {
      // console.log("mealdetails",mealdetails);
      total += item.quantity;
    });
    return total;
  };
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
              <li>
                Ingredient: {item.strIngredient1}, {item.strIngredient2},<br />
                {item.strIngredient3}, {item.strIngredient4}
              </li>
              {/* {cart[item.idMeal] && cart[item.idMeal].quantity !== 0 ? ( */}
              {/* {itemPresentInCart ? ( */}
              {quantity !== 0 ? (
                <div className="cartItem__incrDec">
                  <button
                    className="incrDec-btn"
                    onClick={() => dispatch(decrementQuantity(item))}
                  >
                    -
                  </button>
                  {/* <h4 className="num">{item.quantity || 0}</h4> */}

                  <h4 className="num">{getTotalQuantity() || 0}</h4>

                  <button
                    className="incrDec-btn"
                    // onClick={
                    //   () => dispatch(addToCart(item))
                    onClick={() => dispatch(incrementQuantity(item))}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="add-btn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add
                </button>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mealitems;
