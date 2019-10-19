import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>{project.projectName}</h1>
      <p>Description: {project.description}</p>
      <p>Funding Needed: ${project.fundingAmount}</p>
      <p>Industry: {project.projectType}</p>
    </div>
  )
}

export default Project;
