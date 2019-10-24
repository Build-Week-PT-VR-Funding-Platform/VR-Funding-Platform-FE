import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Container } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { Spinner } from 'reactstrap';

import User from './User';
import ProjectCard from './ProjectCard';
import ProjectForm from './Forms/ProjectForm';

const Dashboard = () => {
  const [user] = useContext(UserContext);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${user.id}/projects`)
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [user.id]);

  if (!projects) {
    return <Spinner />;
  }

  return (
    <Container>
      <User user={user} />
      <ProjectForm setProjects={setProjects} projects={projects} />
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          setProjects={setProjects}
          user={user}
        />
      ))}
    </Container>
  );
};

export default Dashboard;
