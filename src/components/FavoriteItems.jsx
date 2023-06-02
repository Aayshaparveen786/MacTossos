import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { removeFavorite } from "../redux/slice/mealSlice";
const FavoriteItem = () => {
  const mealdetails = useSelector(
    (state) => state.mealdetails
  );
  console.log("FavoriteItem", mealdetails?.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="fvt-item">Favorite Item</h2>
      {mealdetails?.cart?.map((item, index) => (
        <div key={index} className="fvt-items">
          <ul>
            <li>
              <img src={item.strMealThumb} />
            </li>
            <br />
            <li>Name: {item.strMeal}</li>
            <br />
            <li>Categroy: {item.strCategory}</li>
            <br />
            <li>Area: {item.strArea}</li>
            <br />
            Ingredient: {
              item.strIngredient1
            }, {item.strIngredient2},<br />
            {item.strIngredient3},{" "}
            {item.strIngredient4}
          </ul>
          <button
            className="cartItem__removeButton"
            onClick={() =>
              dispatch(
                removeFavorite(
                  mealdetails.cart.item
                )
              )
            }
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default FavoriteItem;
