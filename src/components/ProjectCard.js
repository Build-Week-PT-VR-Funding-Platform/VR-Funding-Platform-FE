import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

const ProjectCard = props => {

  return(
    <Card>
      <CardHeader tag="h3">{props.name}</CardHeader>
      <CardBody>
        <CardText><strong>Description:</strong> {props.description}</CardText>
        <CardText><strong>Funding Needed:</strong> ${props.amount}</CardText>
        <CardText><strong>Industry:</strong> {props.type}</CardText>
      </CardBody>
    </Card>
  )
}

export default ProjectCard;
