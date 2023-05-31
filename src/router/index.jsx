/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import CartItem from "../components/CartItems";
import FavoriteItem from "../components/FavoriteItems";
import Search from "../components/SearchItem";
import SignIn from "../components/SignIn";
import About from "../components/About";
import Contact from "../components/Contact";
import ForgotPassword from "../components/ForgotPassword";
// eslint-disable-next-line camelcase
import Create_account from "../components/Create_account";
import Recipe from "../components/Recipe";
import Payment from "../components/Payment";
const MainFram = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/ForgotPassword"
          element={<ForgotPassword />}
        />
        <Route
          path="/Create_account"
          element={<Create_account />}
        />

        <Route path="/Home" element={<Home />} />
        <Route
          path="/About"
          element={<About />}
        />
        <Route
          path="/Contact"
          element={<Contact />}
        />
        <Route
          path="/CartItem"
          element={<CartItem />}
        />
        <Route
          path="/FavoriteItem"
          element={<FavoriteItem />}
        />
        <Route
          path="/Search"
          element={<Search />}
        />
        <Route
          exact
          path="/:recipeId"
          element={<Recipe />}
        />
        <Route
          path="/Payment"
          element={<Payment />}
        />
      </Routes>
    </>
  );
};

export default MainFram;
