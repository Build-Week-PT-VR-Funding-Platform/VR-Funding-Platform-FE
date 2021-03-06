import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Spinner
} from 'reactstrap';
import { UserContext } from '../contexts/UserContext';

function Login({ history }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [reqError, setReqError] = useState({
    error: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const userArray = useContext(UserContext);
  const setUser = userArray[1];

  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post('https://vr-fund-platform.herokuapp.com/auth/login', formData)
      .then(res => {
        setIsLoading(false);
        setUser({
          id: res.data.user.id,
          name: res.data.user.name,
          username: res.data.user.username,
          about: res.data.user.about
        });
        localStorage.setItem('token', res.data.token);
        setFormData({
          username: '',
          password: ''
        });
        setReqError({
          error: ''
        });
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setReqError({
          error:
            'Error occurred.  Please make sure to enter the correct username and password.'
        });
        setFormData({
          username: '',
          password: ''
        });
      });
  };

  return (
    <Container className="form-container">
      <Form className="form" onSubmit={submitHandler}>
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
        <Button color="primary" disabled={isLoading ? true : false}>
          Login
        </Button>
        {isLoading && <Spinner color="primary" />}
      </Form>
      {reqError.error && <Alert color="danger">{reqError.error}</Alert>}
      <Alert color="info">
        <Link to="/signup">Don't have an account? Signup instead</Link>
      </Alert>
    </Container>
  );
}

export default Login;
