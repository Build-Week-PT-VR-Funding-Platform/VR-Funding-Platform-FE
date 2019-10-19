import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard.js';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Project = props => {
  const[project, setProject] = useState();

  useEffect(() => {
    const { id } = props.match.params;

    axios.get(`https://vr-fund-platform.herokuapp.com/projects/${id}`).then(res => {
      console.log(res);
      setProject(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [props.match.params])

  if(!project) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <ProjectCard
      description={project.description}
      amount={project.fundingAmount}
      name={project.projectName}
      type={project.projectType}
      />
      <Link to="/projects" className="project-link"><Button color="primary">Back to Projects</Button>{' '}</Link>
    </div>
  )
}

export default Project;
