import React, { useState } from 'react';
import { Container, Form, FormGroup,  Label, Input, Button } from 'reactstrap';
import useCustom from './CustomHook.js';

const CreateProjectForm = props => {

  const [globalState, setGlobalState] = useCustom();

  const submitHandler = (e) => {
    e.preventDefault();

    let validInputs = 0;
    let newProject = {};
    let inputs = document.querySelectorAll(".form-control");

    console.log(inputs);
    inputs.forEach(input => {

      if (input.classList.contains('is-valid')) {

        validInputs += 1;
        newProject.id = validInputs + 100;
        newProject[input.name] = input.value
        console.log(validInputs);
        console.log(newProject);

      } else {

        input.classList.add('is-invalid');

      }

      if(validInputs === 4) {

        setGlobalState({projectList: [...globalState.projectList, newProject]});
        props.history.push('/projects')

      }
    })

    //Add new project to ProjectList/Entrepreneur
  };

  const handleChange = (e) => {

    if (e.target.value !== '') {

      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');

    } else {

      e.target.classList.add('is-invalid');

    }
  }

  return (
    <Container className="form-container">
      <Form className="create-project-form" onSubmit={submitHandler}>
        <h2>Create a New Project</h2>
        <FormGroup>
          <Label for="projectName">Project Name:</Label>
          <Input
            type="text"
            name="projectName"
            placeholder=""
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectType">Industry:</Label>
          <Input
            type="text"
            name="projectType"
            placeholder=""
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            placeholder=""
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fundingAmount">Funding Needed:</Label>
          <Input
            type="text"
            name="fundingAmount"
            placeholder=""
            onChange={handleChange}
          />
        </FormGroup>
        <Button
          color="primary"
          >Create Project</Button>
      </Form>
    </Container>
  )
}

export default CreateProjectForm;
