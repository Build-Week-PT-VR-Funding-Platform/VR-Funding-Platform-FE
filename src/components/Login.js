import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup,  Label, Input, Button, Alert } from 'reactstrap';

function Login(props) {
  const [ formData, setFormData ] = useState({
    username: '',
    password: ''
  });

  const [ reqError, setReqError ] = useState({
    error: ''
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
        console.log(res);
        localStorage.setItem('token', res.data.token); 
        setFormData({
          username: '',
          password: ''
        });
        setReqError({
          error: ''
        });
        props.history.push('/');
      })
      .catch( err => {
        console.log(err)
        setReqError({
          error: 'Error occurred.  Please make sure to enter the correct username and password.'
        });
        setFormData({
          username: '',
          password: ''
        });
      });
  };

  return (
    <Container className="form-container">
      <Form className="login-form" onSubmit={submitHandler}>
        <h2>Login</h2>
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
      { reqError.error && 
        <Alert color="danger">
          {reqError.error}
        </Alert>}
      <Alert color="info">
         <Link to="/signup">Don't have an account? Signup instead</Link>
      </Alert>
    </Container>
  );
};

export default Login;
