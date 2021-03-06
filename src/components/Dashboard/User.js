import React from 'react';
import { Jumbotron } from 'reactstrap';

const User = props => {
  const { name, about } = props.user;

  return (
    <Jumbotron>
      <h1>{name}</h1>
      <p>{about}</p>
    </Jumbotron>
  );
};

export default User;
