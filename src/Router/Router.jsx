import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../1.Navbar/Nav";
import Login from "../2.Login/Login";
import Register from "../2.Login/Register";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}
