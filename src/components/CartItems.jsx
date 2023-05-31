/* eslint-disable react/prop-types */
import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/slice/mealSlice";
import { NavLink } from "react-router-dom";

const CartItem = ({ quantity = 0 }) => {
  const mealdetails = useSelector(
    (state) => state.mealdetails
  );
  console.log("mealDetails", mealdetails?.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-container">
        <div className="Cart">
          <h2 className="cart-heading">
            Cart Details
          </h2>
          <button
            className="cartItem__removeButton"
            onClick={() =>
              dispatch(
                removeItem(mealdetails.item)
              )
            }
          >
            Remove
          </button>
        </div>
        {mealdetails?.cart?.map((item, index) => (
          <div key={index} className="cart-items">
            <ul>
              <li>
                <img src={item.strMealThumb} />
              </li>
              <br />
              <li>Name: {item.strMeal}</li>
              <br />
              <li>
                Categroy: {item.strCategory}
              </li>
              <br />
              <li>Area: {item.strArea}</li>
              <br />
              <li>
                Ingredient: {item.strIngredient1},
                {item.strIngredient2},
                {item.strIngredient3},
                {item.strIngredient4}
              </li>
            </ul>
            <div className="cartItem__incrDec">
              <button
                className="incrDec-btn"
                onClick={() =>
                  dispatch(
                    decrementQuantity(
                      mealdetails.item
                    )
                  )
                }
              >
                -
              </button>
              {/* <p>{quantity}</p> */}
              <h4 className="num">
                {item.quantity}
              </h4>

              <button
                className="incrDec-btn"
                onClick={() =>
                  dispatch(
                    incrementQuantity(
                      mealdetails.item
                    )
                  )
                }
              >
                +
              </button>
            </div>
            <NavLink to="/Payment">
              <button className="cartItem__removeButton">
                Payment
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
