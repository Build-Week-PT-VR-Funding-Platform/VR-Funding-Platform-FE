import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import { UserContext } from './contexts/UserContext';
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
    <UserContext.Provider value={[ user, setUser ]}>
      <Router>
        <div className="App">
          <Route
            path="/login"
            render={ props => (
              <Login
                {...props}
                setUser={setUser}/>
            )}/>
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/account" component={Account} />
          <Route exact path="/projects" component={ProjectList} />
          <Route path="/projects/:id" render={props => {
            return <Project {...props} />;
          }} />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
