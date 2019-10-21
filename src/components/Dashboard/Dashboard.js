import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import { team, projects } from '../../dummyData';

import Team from './Team';
import ProjectCard from './ProjectCard';
import AddProjectForm from './AddProjectForm';

/*
    1. Check local storage for token and If user is logged in display dashboard
    2. Get id from match prop from react router
    3. Axios GET /users/id and set to state
    4. Axios GET /users/id/projects and set to state
    5. 
  */

const Dashboard = props => {
  // const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(`https://vr-fund-platform.herokuapp.com/users/${1}/projects`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Team team={team} />
      <AddProjectForm />
      {projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </Container>
  );
};

export default Dashboard;
