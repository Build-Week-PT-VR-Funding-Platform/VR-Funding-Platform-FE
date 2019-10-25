import React, { useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label
} from 'reactstrap';

const EditModal = props => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    projectName: props.project.projectName,
    projectType: props.project.projectType,
    description: props.project.description,
    fundingAmount: props.project.fundingAmount,
    id: props.project.id
  });

  const toggle = () => setModal(!modal);

  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const editProject = event => {
    axiosWithAuth()
      .put(`projects/${formData.id}`, formData)
      .then(res => {
        props.getProjects();
        toggle();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Project</ModalHeader>

        <ModalBody>
          <Label>Project Name</Label>
          <Input
            type="text"
            name="projectName"
            onChange={changeHandler}
            value={formData.projectName}
          />

          <Label>Project Type</Label>
          <Input
            type="text"
            name="projectType"
            onChange={changeHandler}
            value={formData.projectType}
          />

          <Label>Description</Label>
          <Input
            type="textarea"
            name="description"
            onChange={changeHandler}
            value={formData.description}
          />

          <Label>Funding Amount</Label>
          <Input
            type="text"
            name="fundingAmount"
            onChange={changeHandler}
            value={formData.fundingAmount}
          />
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={editProject}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
