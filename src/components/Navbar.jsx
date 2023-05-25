import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Favorite } from "@mui/icons-material";
import { CgSearch } from "react-icons/cg";
const Navbar = () => {
  const mealdetails = useSelector((state) => state.mealdetails);

  const getTotalQuantity = () => {
    let total = 0;
    mealdetails.cart.forEach((item) => {
      // console.log("mealdetails",mealdetails);
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <div className="Nav-container">
        <div className="Kitchen-heading">
          <NavLink to="/">
            <img src="./images/Mactassos-logo_white.png" />
          </NavLink>
        </div>
        <div className="Links-box">
          <NavLink to="/Home" className="Nav-link">
            Home
          </NavLink>
          <NavLink to="/About" className="Nav-link">
            About
          </NavLink>
          <NavLink to="/Contact" className="Nav-link">
            Contact
          </NavLink>
        </div>
        <div className="Icons-box">
          <div className="search-box">
            <NavLink to="/Search">
              <CgSearch color="white" size="1.5rem" />
            </NavLink>
            <p className="icons-name">Search</p>
          </div>
          <div>
            <NavLink to="/FavoriteItem">
              <Favorite
                sx={{
                  color: "white",
                  cursor: "pointer",
                  "&.MuiSvgIcon-root": {
                    fontSize: "1.5rem",
                  },
                }}
              />
            </NavLink>
            <p>Favorite</p>
          </div>
          <div>
            <div className="cart">
              <AiOutlineShoppingCart color="white" size="2rem" />

              <NavLink to="/CartItem">
                <button className="cart-btn">{getTotalQuantity() || 0}</button>
              </NavLink>
            </div>
            <p>Cart</p>
          </div>
        </div>
        {/* <div className="Search">
        <NavLink to="/Search">
        <button className="Search-btn">Search Items</button>
        </NavLink>
    </div> */}
      </div>
    </>
  );
};

export default Navbar;
