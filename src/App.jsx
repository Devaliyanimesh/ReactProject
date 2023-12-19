import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Main from "./0.MainPages/Main";

function App() {
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
