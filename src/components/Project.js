import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard.js';

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
    <ProjectCard
    description={project.description}
    amount={project.fundingAmount}
    name={project.projectName}
    type={project.projectType}
    />
  )
}

export default Project;
