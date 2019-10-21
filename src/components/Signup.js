import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

function Signup() {
  return (
    <Container className="form-container">
      <h1>Signup</h1>
      <Form className="signup-form">
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
        <Button color="primary">Sign Up</Button>
      </Form>
      <Alert color="info">
        <Link to="/login">Already have an account? Login instead</Link>
      </Alert>
    </Container>
  );
};

export default Signup;
