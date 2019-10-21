import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge
} from 'reactstrap';

const ProjectCard = props => {
  const {
    projectName,
    projectType,
    description,
    fundingAmount
  } = props.project;

  return (
    <div className="project-card">
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader tag="h3">{projectName}</CardHeader>
            <CardBody>
              <CardTitle className="text-muted">{projectType}</CardTitle>
              <h6>
                <Badge color="success">${fundingAmount}</Badge>
              </h6>
              <CardText>{description}</CardText>
              <Button color="info">Edit</Button> {''}
              <Button color="danger">Delete</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectCard;
