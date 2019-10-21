import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

function Login(props) {
  const [ formData, setFormData ] = useState({
    username: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('https://vr-fund-platform.herokuapp.com/auth/login', formData)
      .then( res => {
        localStorage.setItem('token', res.data.token); 
        setFormData({
          username: '',
          password: ''
        });
        props.history.push('/');
      })
      .catch( err => console.log(err));
  };

  return (
    <Container className="form-container">
      <h1>Login</h1>
      <Form className="login-form" onSubmit={submitHandler}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input 
            type="text" 
            name="username" 
            placeholder="" 
            value={formData.username}
            onChange={changeHandler}
          />
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
