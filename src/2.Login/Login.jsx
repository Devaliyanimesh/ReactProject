import React from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";



export default function Loginn({value , ChekData}) {

  return (
    <>
      <Form autoComplete="off">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            placeholder="email"
            type="text"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100 bg-danger" onClick={() => ChekData()}>
          Submit
        </Button>
      </Form>
    </>
  );
}
