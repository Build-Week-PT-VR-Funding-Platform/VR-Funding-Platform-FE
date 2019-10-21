import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

function Login() {
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
