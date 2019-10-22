import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Project from './components/Project.js';
import ProjectList from './components/ProjectList.js';
import MainNav from './components/MainNav.js';

function App() {

  const [ user, setUser ] = useState({
    id: null,
    name: "",
    username: ""
  });

  return (
    <Router>
      <div className="App">
        <MainNav />
        <Route
          path="/login"
          render={ props => (
            <Login
              {...props}
              setUser={setUser}
            />
          )}
        />
        <Route path="/signup" component={Signup} />
        <Route exact path="/projects" component={ProjectList} />
        <Route path="/projects/:id" render={props => {
          return <Project {...props} />;
        }} />
      </div>
    </Router>
  );
}

export default App;
