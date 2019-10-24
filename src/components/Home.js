import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.js';
import CTA from './CTA.js';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Home = props => {
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

  return (<div className="project text-center">
    <CTA />
    <ProjectList />
  </div>
    
  )
}

export default Home;
