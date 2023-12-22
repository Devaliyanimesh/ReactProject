import React from "react";
import { Input, Label, Button, Form, FormGroup } from "reactstrap";

export default function NewUser() {
  return (
    <>
      <Form autoComplete="off">
        <FormGroup>
          <Label for="exampleEmail">FirstName</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="FirstName"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">LastName</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="LastName"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder=" Create password "
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"> Confirm Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder=" Confirm password "
            type="password"
          />
        </FormGroup>
        <Button color="danger" className="w-100">Submit</Button>
      </Form>
    </>
  );
}
