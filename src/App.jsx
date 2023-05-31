/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainFram from "./router";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainFram />
      </BrowserRouter>
    </>
  );
}

export default App;

