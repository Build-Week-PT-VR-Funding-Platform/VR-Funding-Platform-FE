import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Collapse
} from 'reactstrap';

const AddProjectForm = props => {
  const [collapse, setCollapse] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [description, setDescription] = useState('');
  const [fundingAmount, setFundingAmount] = useState('');

  const project = {
    projectName: projectName,
    projectType: projectType,
    description: description,
    fundingAmount: fundingAmount
  };

  const toggle = () => setCollapse(!collapse);

  const submitForm = event => {
    event.preventDefault();
    axios
      .post('https://vr-fund-platform.herokuapp.com/projects', project)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleProjectName = event => {
    event.preventDefault();
    setProjectName(event.target.value);
  };

  const handleProjectType = event => {
    event.preventDefault();
    setProjectType(event.target.value);
  };

  const handleDescription = event => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleFundingAmount = event => {
    event.preventDefault();
    setFundingAmount(event.target.value);
  };

  return (
    <div>
      <Button onClick={toggle} style={{ marginBottom: '50px' }}>
        {collapse ? '- New Project' : '+ New Project'}
      </Button>
      <Collapse isOpen={collapse}>
        <Form onSubmit={submitForm}>
          <FormGroup row>
            <Label for="projectName" sm={2}>
              Project Name:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                onChange={handleProjectName}
                value={projectName}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="projectType" sm={2}>
              Project Type:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                onChange={handleProjectType}
                value={projectType}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="funding" sm={2}>
              Funding Amount:
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                placeholder="$0.00"
                onChange={handleFundingAmount}
                value={fundingAmount}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>
              Project Description:
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                onChange={handleDescription}
                value={description}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Button color="primary">Submit</Button>
          </FormGroup>
        </Form>
      </Collapse>
    </div>
  );
};

export default AddProjectForm;
