import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/slice/mealSlice";
const CartItem = ({ quantity = 0 }) => {
  const mealdetails = useSelector((state) => state.mealdetails);
  console.log("mealDetails", mealdetails?.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-container">
        <h2 className="cart-heading"> Cart Details</h2>
        {mealdetails?.cart?.map((item, index) => (
          <div key={index} className="cart-items">
            <ul>
              <li>
                <img src={item.strMealThumb} />
              </li>
              <br />
              <li>Name: {item.strMeal}</li>
            </ul>
            <div className="cartItem__incrDec">
              <button
                className="incrDec-btn"
                onClick={() => dispatch(decrementQuantity(mealdetails.item))}
              >
                -
              </button>
              {/* <p>{quantity}</p> */}
              <h4 className="num">{item.quantity}</h4>

              <button
                className="incrDec-btn"
                onClick={() => dispatch(incrementQuantity(mealdetails.item))}
              >
                +
              </button>
            </div>
            <button
              className="cartItem__removeButton"
              onClick={() => dispatch(removeItem(mealdetails.item))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
