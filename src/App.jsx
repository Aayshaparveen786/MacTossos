import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Mealitems from "./components/mealItems";
import MainFram from "./router";
function App() {
  return (
    <>
    <BrowserRouter>
    <MainFram/>
    </BrowserRouter>
      {/* <Home />
      <Mealitems /> */}
    </>
  );
}

export default App;
