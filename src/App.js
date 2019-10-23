import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Project from './components/Project.js';
import Home from './components/Home.js'
import ProjectList from './components/ProjectList.js';
import MainNav from './components/MainNav.js';
import Account from './components/Account';
import { UserContext } from './contexts/UserContext';
import CreateProjectForm from './components/CreateProjectForm.js';

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
        <Route exact path="/home" component={Home} />
        <Route path="/projects/:id" render={props => {
          return <Project {...props} />;
        }} />
        <Route path="/create-project" component={CreateProjectForm} />
        <PrivateRoute path="/account" component={Account} />
      </div>
    </Router>
  );
}

export default App;
