import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Signup() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input type="text" name="username" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input type="password" name="password" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input type="text" name="name" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="about">About:</Label>
          <Input type="textarea" name="about" placeholder="" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Signup;
