import React from 'react';
import { Jumbotron } from 'reactstrap';

const Team = props => {
  const { name, about } = props.team;

  return (
    <Jumbotron>
      <h1>{name}</h1>
      <p>{about}</p>
    </Jumbotron>
  );
};

export default Team;
