import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const EntrepreneurCard = props => {

  return(
    <Card body inverse color="info" className="entrepreneur text-center">
      <CardTitle><h2>{props.username}</h2></CardTitle>
    </Card>
  )
}

export default EntrepreneurCard;
