import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getMeal, addFavorite } from "../redux/slice/mealSlice";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Favorite, FavoriteBorder, SnippetFolder } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Mealitems = () => {
  //   const dispatch = useDispatch();
  //   const state = useSelector((state) => state);
  //   console.log("State", state);

  //   if (state.card.isLoading) {
  //     return <h1>Loading....</h1>;
  //   }
  // const { card, isLoading } = useSelector((state) => state.card);
  // const { card, isLoading } = useSelector((state) => state.card);
  // console.log("State", mealdetails);

  // Function to increment count by 1
  // const [count, setCount] = useState(0);
  // const handleAddToCard =(e)=>{
  //   dispatch (addItems(e));
  // }

  const mealdetails = useSelector((state) => state.mealdetails);
  // console.log("mealdetails",mealdetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeal());
    // console.log("State", mealdetails);
  }, []);
  const getTotalQuantity = () => {
    let total = 0;
    mealdetails.cart.forEach((item) => {
      // console.log("mealdetails",mealdetails);
      total += item.quantity;
    });
    return total;
  };
  // const [isFavorite, setFavorite] = useState();
  // console.log("favorite", isFavorite);

  // const toggleFavorite = (item) => {
  //   item.isFavorite = !item.isFavorite;
  //   dispatch(addFavorite(item));
  // };

  const toggleFavorite = (item) => {
    const updatedItem = { ...item, isFavorite: !item.isFavorite };
    dispatch(addFavorite(updatedItem));
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
              <li>
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
