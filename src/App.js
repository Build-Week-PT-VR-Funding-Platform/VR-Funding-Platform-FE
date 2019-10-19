import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Project from './components/Project.js';
import ProjectList from './components/ProjectList.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/projects" component={ProjectList} />
        <Route path="/projects/:id" render={props => {
          return <Project {...props} />;
        }} />
      </div>
    </Router>
  );
}

export default App;
