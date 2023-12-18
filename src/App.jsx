import React from "react";
import Second from "./Second/Second";
import Crousel from "./Third/Crousel";
import Nav from "./First/Nav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  BrowserRouter,
  Route,
  Router,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route>
            <Nav />
            <Second />
            <Crousel />
          </Route>
        </Router>

      </BrowserRouter> */}
      <Nav />
      <Second />
      <Crousel />

      <ToastContainer />
    </>
  );
}

export default App;
