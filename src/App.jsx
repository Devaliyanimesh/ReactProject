import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Main from "./0.MainPages/Main";
import Router from "./00Router/Router";

function App() {
  return (
    <>
      {/* <Main /> */}
      <Router/>
      <ToastContainer />
    </>
  );
}

export default App;
