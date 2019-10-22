import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
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
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    description: '',
    fundingAmount: ''
  });

  const toggle = () => setCollapse(!collapse);

  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/projects', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
                name="projectName"
                onChange={changeHandler}
                value={formData.projectName}
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
                name="projectType"
                onChange={changeHandler}
                value={formData.projectType}
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
                name="fundingAmount"
                placeholder="$0.00"
                onChange={changeHandler}
                value={formData.fundingAmount}
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
                name="description"
                onChange={changeHandler}
                value={formData.description}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Button color="primary" onClick={submitForm}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Collapse>
    </div>
  );
};

export default AddProjectForm;
