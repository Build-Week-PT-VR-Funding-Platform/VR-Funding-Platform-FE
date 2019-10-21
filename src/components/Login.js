import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

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
        <Button color="primary">Login</Button>
      </Form>
      <Alert color="info">
         <Link to="/signup">Don't have an account? Signup instead</Link>
      </Alert>
    </Container>
  );
};

export default Login;
