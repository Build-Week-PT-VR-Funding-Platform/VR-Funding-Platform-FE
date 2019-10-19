import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Project from './components/Project.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Project} />
        <Route path="/signup" component={Project} />
        <Route path="/projects/:id" render={props => {
          return <Project {...props} />;
        }} />
      </div>
    </Router>
  );
}

export default App;
