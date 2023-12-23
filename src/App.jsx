import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Nav from "./1.Navbar/Nav";


function App() {
  return (
    <>
      <Nav />

      <ToastContainer />
    </>
  );
}

export default App;
