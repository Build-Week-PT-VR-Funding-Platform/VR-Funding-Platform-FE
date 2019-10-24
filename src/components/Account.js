import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Container, Form, FormGroup, FormText, Label, Input, Button, Alert, Spinner, ButtonGroup } from 'reactstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Account(props) {

  const userArray = useContext(UserContext);
  const user = userArray[0];
  const [ about, setAbout ] = useState('');

  useEffect(() => {
    axiosWithAuth().get(`/users/${user.id}`)
      .then( res => {
        console.log(res.data.about);
        setAbout(res.data.about);
      })
      .catch( err => console.log(err));
  }, [user.id]);


  const [ formData, setFormData ] = useState({
    username: user.username,
    password: '',
    name: user.name,
    about: ''
  });

  const [ reqStatus, setReqStatus ] = useState({
    error: '',
    success: ''
  });

  const [ isLoading, setIsLoading ] = useState(false);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth().put(`/users/${user.id}`, formData)
      .then( res => {
        setIsLoading(false);
        console.log(res);
        setReqStatus({
          error: '',
          success: 'Account updated!'
        });
      })
      .catch( err => {
        console.log(err)
        setIsLoading(false);
        setReqStatus({
          error: 'Error occurred.  Please make sure all fields are filled out.',
          success: ''
        });
      });
  }

  const deleteHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth().delete(`/users/${user.id}`)
      .then( res => {
        setIsLoading(false);
        console.log(res);
        localStorage.removeItem('token');
        props.history.push('/');
      })
      .catch( err => {
        console.log(err)
        setIsLoading(false);
        setReqStatus({
          error: 'Error occurred.',
          success: ''
        });
      });
  }


  return (
    <Container className="form-container">
      <Form className="form">
        <h2>Account Info</h2>
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
            value={about}
            onChange={changeHandler}
          />
          <FormText>* Required</FormText>
        </FormGroup>
        <ButtonGroup>
          <Button
            color="secondary"
            disabled={isLoading ? true : false }
            type="button"
            onClick={updateHandler}
          >Update Account</Button>
          <Button
            color="danger"
            disabled={isLoading ? true : false }
            type="button"
            onClick={deleteHandler}
          >Delete Account</Button>
        </ButtonGroup>

        { isLoading && <Spinner color="primary"/> }
      </Form>
      { reqStatus.success && 
        <Alert color="success">
          {reqStatus.success}
        </Alert>}
      { reqStatus.error && 
        <Alert color="danger">
          {reqStatus.error}
        </Alert>}
    </Container>
  );
};

export default Account;
