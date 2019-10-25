import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Project from './components/Project.js';
import Home from './components/Home.js'
import ProjectList from './components/ProjectList.js';
import MainNav from './components/MainNav.js';
import Account from './components/Account';
import Entrepreneurs from './components/Entrepreneurs.js';
import Entrepreneur from './components/Entrepreneur.js';

import { UserContext } from './contexts/UserContext';
import CreateProjectForm from './components/CreateProjectForm.js';

function App() {
  const [user, setUser] = useState({
    id: null,
    name: '',
    username: '',
    about: ''
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <div className="App">
          <MainNav />
          <Route
            path="/login"
            render={props => <Login {...props} setUser={setUser} />}
          />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" render={props => {
            return <Project {...props} />;
          }} />
          <Route path="/create-project" render={props => {
            return <CreateProjectForm {...props} />;
          }} />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute exact path="/entrepreneurs" component={Entrepreneurs} />
          <PrivateRoute path="/entrepreneurs/:id" component={Entrepreneur} />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
