import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard.js';

const ProjectList = props => {
  const [projectList, setProjectList] = useState();

  useEffect(() => {
    axios.get('https://vr-fund-platform.herokuapp.com/projects').then(res => {
      console.log(res);
      setProjectList(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  if (!projectList) {
    return <h3>Loading...</h3>;
  }

  return (
    projectList.map((project, index) => {
      return <ProjectCard
      description={project.description}
      amount={project.fundingAmount}
      name={project.projectName}
      type={project.projectType}
      key={index}
      />
    })
  )
}

export default ProjectList;
