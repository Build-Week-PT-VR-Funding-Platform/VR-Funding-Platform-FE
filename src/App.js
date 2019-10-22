import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';

import { UserContext } from './contexts/UserContext';

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
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
