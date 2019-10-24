import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard.js';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import useCustom from './CustomHook.js';

const ProjectList = props => {
  const [globalState, setGlobalState] = useCustom();

  useEffect(() => {
    axios.get('https://vr-fund-platform.herokuapp.com/projects').then(res => {
      //console.log(res);
      const newState = res.data;
      if (globalState.projectList === undefined || globalState.projectList.length === 0) {
        setGlobalState({projectList: newState});
      }
    }).catch(err => {
      console.log(err);
    })
  }, [])

  if (globalState.projectList === undefined || globalState.projectList.length === 0) {
    return <h3>Loading...</h3>;
  }


  return (
    globalState.projectList.map((project, index) => {
      console.log(globalState.projectList);
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
