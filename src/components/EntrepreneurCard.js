import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button } from 'reactstrap';

const EntrepreneurCard = ({userObj}) => {
  return(
    <Card body inverse color="info" className="entrepreneur text-center">
      <CardTitle><h2>{userObj.username}</h2></CardTitle>
      <Link to={`/entrepreneurs/${userObj.id}`} className="project-link"><Button color="primary">View Entrepreneur</Button></Link>
    </Card>
  )
}

export default EntrepreneurCard;
