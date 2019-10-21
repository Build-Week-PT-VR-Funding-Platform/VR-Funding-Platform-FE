import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Login() {
  return (
    <Container className="form-container">
      <h1>Login</h1>
      <Form className="login-form">
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
    </Container>
  );
};

export default Login;
