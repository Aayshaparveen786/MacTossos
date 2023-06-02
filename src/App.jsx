/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainFram from "./router";
// import Spinner from "./components/Spinner";
// import { useState } from "react";
function App() {
  // const [show, setShow] = useState(true);
  return (
    <>
      <BrowserRouter>
        {/* <Spinner show={show} /> */}
        {/* <MainFram shower={setShow} /> */}
        <MainFram />
      </BrowserRouter>
    </>
  );
}

export default App;

