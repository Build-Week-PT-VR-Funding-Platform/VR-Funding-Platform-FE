import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';

import Team from './Team';
import ProjectCard from './ProjectCard';
import AddProjectForm from './AddProjectForm';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

/*
    1. Check local storage for token and If user is logged in display dashboard
    2. Get id from match prop from react router
    3. Axios GET /users/id and set to state
    4. Axios GET /users/id/projects and set to state
    5. 
  */

const Dashboard = props => {
  const { user } = props.user;
  const [projects, setProjects] = useState([]);

  console.log(props.match);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${user.id}/projects`)
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Team user={user} />
      <AddProjectForm />
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Container>
  );
};

export default Dashboard;
