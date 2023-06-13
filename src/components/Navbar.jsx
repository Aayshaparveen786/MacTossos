import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Favorite } from "@mui/icons-material";
import { CgSearch } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  // const handleClose = () => {
  //   setState({ ...state, open: false });
  // };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const buttons = (
    <React.Fragment>
      <FiLogOut
        color="white"
        size="1.5rem"
        onClick={handleClick({
          vertical: "top",
          horizontal: "right",
        })}
      />
    </React.Fragment>
  );
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="Nav-container">
        <div className="Kitchen-heading">
          <a href="#" onClick={() => setOpenMenu(false)}>
            <img src="./images/Mactassos-logo_white.png" />
            {/* <img src="./images/food-logo.png" /> */}
          </a>
        </div>
        <div className={openMenu ? "menuIcon active" : "menuIcon"}>
          <div className="Links-box">
            <NavLink
              to="/Home"
              // className="Nav-link"
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              // className="Nav-link"
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              // className="Nav-link"
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </div>
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
          <div className="Search">
            {buttons}
            <Snackbar
              anchorOrigin={{
                vertical,
                horizontal,
              }}
              sx={{
                marginTop: "3.5rem",
              }}
              open={open}
              // onClose={handleClose}
              message="Are You Sure"
              key={vertical + horizontal}
              action={
                <NavLink to="/">
                  <React.Fragment>
                    <Button
                      sx={{ color: "white" }}
                      // color="primary"
                      size="small"
                      onClick={handleClose}
                    >
                      Ok
                    </Button>
                  </React.Fragment>
                </NavLink>
              }
            />

            <p>LogOut</p>
          </div>
          <div className="mobile-navbar-btn">
            <div onClick={() => setOpenMenu(true)}>
              <GiHamburgerMenu className="mobile-nav-icon" />
            </div>
            <AiOutlineClose
              name="close-outline"
              className="close-outline mobile-nav-icon"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
