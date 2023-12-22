import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// let [value,setValue]=useState({email:"",password:""})
// let [data,setData]=useState([])
// let ChekData=()=>{
//   setData([...data,value])
//   console.log(data);

// }

export default function Login() {
  return (
    <>
      <Form autoComplete="off">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e)=>setValue({...value,email:e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e)=>setValue({...value,password:e.target.value})}
          />
        </FormGroup>
        <Button  className="w-100 bg-danger" >Submit</Button>
      </Form>

    </>
  );
}
