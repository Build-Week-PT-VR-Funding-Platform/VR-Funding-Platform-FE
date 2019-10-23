import React, { useState } from 'react';
import { Container, Form, FormGroup,  Label, Input, Button } from 'reactstrap';

const CreateProjectForm = () => {

  const [projectObject, setProjectObject] = useState([{
    title: '',
    description: '',
    funding: '',
    industry: ''
  }]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(projectObject);
    let {project} = projectObject;
    let inputs = document.querySelectorAll(".form-control");
    console.log(inputs);
    inputs.forEach(input => {
      let name = input.name;
      let value = input.value;
      if (input.classList.contains('is-valid')) {
        setProjectObject(...projectObject, {name: value})
        console.log(projectObject);
      }
    })

    //Add new project to ProjectList/Entrepreneur
  };

  const handleChange = (e) => {
    if (e.target.value !== '') {
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
          <Label for="title">Project Name:</Label>
          <Input
            type="text"
            name="title"
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
          <Label for="funding">Funding Needed:</Label>
          <Input
            type="text"
            name="funding"
            placeholder=""
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="industry">Industry:</Label>
          <Input
            type="text"
            name="industry"
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
