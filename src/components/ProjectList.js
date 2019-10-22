import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard.js';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ProjectList = props => {
  const [projectList, setProjectList] = useState();

  useEffect(() => {
    axios.get('https://vr-fund-platform.herokuapp.com/projects').then(res => {
      //console.log(res);
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
      return <div className="project text-center" key={index}>
      <ProjectCard
      description={project.description}
      amount={project.fundingAmount}
      name={project.projectName}
      type={project.projectType}
      />
      <Link to={`/projects/${index+1}`} className="project-link"><Button color="primary">View Project</Button></Link>
      </div>
    })
  )
}

export default ProjectList;
