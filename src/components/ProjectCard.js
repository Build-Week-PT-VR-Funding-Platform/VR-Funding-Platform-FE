import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

const ProjectCard = props => {

  return(
    <Card>
      <CardHeader tag="h3">{props.name}</CardHeader>
      <CardBody>
        <CardText>Description: {props.description}</CardText>
        <CardText>Funding Needed: ${props.amount}</CardText>
        <CardText>Industry: {props.type}</CardText>
      </CardBody>
    </Card>
  )
}

export default ProjectCard;
