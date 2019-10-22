import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap';

function Signup(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    about: ''
  });

  const [reqStatus, setReqStatus] = useState({
    error: '',
    success: ''
  });

  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post('https://vr-fund-platform.herokuapp.com/auth/register', formData)
      .then(res => {
        setFormData({
          username: '',
          password: '',
          name: '',
          about: ''
        });
        setReqStatus({
          error: '',
          success: 'Account created! Please log in'
        });
      })
      .catch(err => {
        console.log(err);
        setReqStatus({
          error:
            'Error occurred.  Please try a different username and make sure all fields are filled out.',
          success: ''
        });
        setFormData({
          username: '',
          password: '',
          name: '',
          about: ''
        });
      });
  };

  return (
    <Container className="form-container">
      <h1>Signup</h1>
      <Form className="signup-form" onSubmit={submitHandler}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            placeholder=""
            value={formData.username}
            onChange={changeHandler}
          />
          <FormText>* Required</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={changeHandler}
          />
          <FormText>* Required</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder=""
            value={formData.name}
            onChange={changeHandler}
          />
          <FormText>* Required</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="about">About:</Label>
          <Input
            type="textarea"
            name="about"
            placeholder=""
            value={formData.about}
            onChange={changeHandler}
          />
          <FormText>* Required</FormText>
        </FormGroup>
        <Button color="primary">Sign Up</Button>
      </Form>
      {reqStatus.success && <Alert color="success">{reqStatus.success}</Alert>}
      {reqStatus.error && <Alert color="danger">{reqStatus.error}</Alert>}
      <Alert color="info">
        <Link to="/login">Already have an account? Login instead</Link>
      </Alert>
    </Container>
  );
}

export default Signup;
