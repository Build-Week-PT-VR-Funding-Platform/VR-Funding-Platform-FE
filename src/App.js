import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState({
    id: null,
    name: '',
    username: ''
  });

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/dashboard"
          render={props => <Dashboard {...props} user={user} />}
        />
        <Route
          path="/login"
          render={props => <Login {...props} setUser={setUser} />}
        />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
