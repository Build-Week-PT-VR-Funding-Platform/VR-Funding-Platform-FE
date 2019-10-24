import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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
    fundingAmount,
    id
  } = props.project;

  const getProjects = () => {
    axiosWithAuth()
      .get(`/users/${props.user.id}/projects`)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          props.setProjects(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteProject = event => {
    event.preventDefault();
    axiosWithAuth()
      .delete(`projects/${id}`)
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          getProjects();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

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
              <Button color="info">Edit</Button>{' '}
              <Button onClick={deleteProject} color="danger">
                Delete
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectCard;
