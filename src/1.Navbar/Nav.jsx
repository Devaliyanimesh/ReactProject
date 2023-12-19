import React from "react";
import logo from "./../assets/logo.svg";
import { Search, ShoppingCart } from "lucide-react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default function Nav() {
  return (
    <>
      <div className="">
        <div className="row mt-2 align-items-center ">
          <div className="logo col-2">
            <img src={logo} alt="" />
          </div>
          <div
            className="sarch d-flex align-items-center  py-2 col-4 rounded-2  "
            style={{ backgroundColor: "#f0f5ff" }}
          >
            <Search color="black" style={{ marginLeft: "-5px" }} />
            <input
              type="text"
              className="bg-transparent w-100"
              placeholder="Seach for Products,Brand and More"
            />
          </div>
          <div className=" col-1 ms-3">
            <UncontrolledDropdown group>
              <DropdownToggle className="bi bi-person-circle rounded-3 bg-transparent text-black border-0">
                <span className="ms-2">User</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="col-1 ms-2">
         <Button className="bi bi-cart bg-transparent text-black border-0"> <span className="ms-1">Cart</span></Button>
          </div>
          <div className="col-2  ms-2">
          <Button className="bi bi-shop bg-transparent text-black border-0"> <span className="ms-1">Become a Seller</span></Button>
          </div>
          <div className="col-1 ms-2">
          <Button className="bi bi-three-dots-vertical bg-transparent text-black border-0"> </Button>
          </div>
        
        </div>
      </div>
    </>
  );
}
