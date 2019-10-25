import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.js';
import CTA from './CTA.js';
import { Spinner } from 'reactstrap';

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
    return <div>
     <h3>Loading...</h3>
     <Spinner color="primary" />
     </div>
  }

  return (<div className="project text-center">
    <CTA />
    <ProjectList />
  </div>
    
  )
}

export default Home;
