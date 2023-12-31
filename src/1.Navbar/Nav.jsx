import { React, useEffect, useState } from "react";
import logo from "./../assets/logo.svg";
import fkplush from "./../assets/fkplus.svg";
import Dwonload from "./../assets/download.svg";
import profile from "./../assets/profile.svg";
import orders from "./../assets/orders.svg";
import giftCard from "./../assets/giftCard.svg";
import rewards from "./../assets/rewards.svg";
import notification from "./../assets/notification.svg";
import helpcenter from "./../assets/helpcenter.svg";
import advertise from "./../assets/advertise.svg";
import downloadApp from "./../assets/downloadApp.svg";

import { Search } from "lucide-react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Register from "../2.Login/Register";
import Login from "../2.Login/Login";

export default function Nav() {
  let [locallength, setLocalLen] = useState(null);
  const [registerModal, setRegisterModal] = useState(false);
  const togglee = () => {
    setRegisterModal(!registerModal);
  };

  const [login, setLgin] = useState(false);
  const loginToggle = () => setLgin(!login);

  useEffect(() => {
    let localcheck = localStorage.getItem("local") || [];
    let length = localcheck.length;
    setLocalLen(length);
  }, []);
  console.log("--->", locallength);
  const logoutData = () => {
    localStorage.removeItem("local");
    localStorage.removeItem("add");
  };
  return (
    <>
      <Register modal={registerModal} toggle={togglee} />
      <Login modal={login} toggle={loginToggle} />

      <div className=" d-flex bg-white p-2 align-items-center ">
        <div className="logo col-2">
          <img src={logo} alt="" />
        </div>
        <div
          className="sarch d-flex align-items-center  py-2 col-5 rounded-2  "
          style={{ backgroundColor: "#f0f5ff" }}
        >
          <Search color="black" style={{ marginLeft: "5px" }} />
          <input
            type="text"
            className="bg-transparent w-100"
            placeholder="Seach for Products,Brand and More"
          />
        </div>
        <div className=" col-1 ms-1 m-0 p-0 ">
          <UncontrolledDropdown group>
            <DropdownToggle className="bi bi-person-circle rounded-3 bg-transparent text-black border-0">
              <span className="ms-2">User</span>
            </DropdownToggle>
            <DropdownMenu className="mt-2">
              <div className="d-flex border border-top-0 ">
                <DropdownItem className="hide" onClick={togglee}>
                  Register ?
                </DropdownItem>
                {locallength > 0 || locallength !==0 ? (
                  <DropdownItem
                    className="text-primary fw-bold"
                    onClick={logoutData}
                  >
                    Logout
                  </DropdownItem>
                ) : (
                  <DropdownItem
                    className="text-primary fw-bold"
                    onClick={loginToggle}
                  >
                    Login
                  </DropdownItem>
                )}
              </div>
              <DropdownItem className="p-2">
                <img src={profile} alt="" />
                <span className="ms-2">My Profile</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={fkplush} alt="" />
                <span className="ms-2">Flipkart Plush Zone</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={orders} alt="" />
                <span className="ms-2">Order</span>Order
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={Dwonload} alt="" />
                <span className="ms-2">Wishlist</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={giftCard} alt="" />
                <span className="ms-2">Rewards</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={rewards} alt="" />
                <span className="ms-2">Gift card</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div className="col-1 ms-1 m-0 p-0">
          <Button className="bi bi-cart bg-transparent text-black border-0">
            <span className="ms-1">Cart</span>
          </Button>
        </div>
        <div className="col-2  ms-1 m-0 p-0">
          <Button className="bi bi-shop bg-transparent text-black border-0">
            <span className="ms-1">Become a Seller</span>
          </Button>
        </div>
        <div
          className="
          ms-5 m-0 p-0"
        >
          <UncontrolledDropdown group>
            <DropdownToggle className="bi bi-three-dots-vertical bg-transparent text-black border-0"></DropdownToggle>
            <DropdownMenu className="mt-2 ">
              <DropdownItem className="p-2">
                <img src={notification} alt="" />
                <span className="ms-2">Notification Preferences</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={helpcenter} alt="" />
                <span className="ms-2">24x7 Customer Care</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={advertise} alt="" />
                <span className="ms-2">Advertise</span>
              </DropdownItem>
              <DropdownItem className="p-2">
                <img src={downloadApp} alt="" />
                <span className="ms-2">Download App</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </>
  );
}
