import React from "react";
import logo from "./../assets/logo.svg";
import { Search } from "lucide-react";

export default function Nav() {
  return (
    <>
      <div className="">
        <div className="row mt-2 ">
          <div className="logo col-2">
            <img src={logo} alt="" />
          </div>
          <div className="sarch d-flex align-items-center  col-5 rounded-2  " style={{backgroundColor:"#f0f5ff"}}>
            <Search color="black" style={{marginLeft:"-5px"} } />
            <input type="text" className="bg-transparent w-100" placeholder="Seach for Products,Brand and More" />
          </div>
        </div>
      </div>
    </>
  );
}
