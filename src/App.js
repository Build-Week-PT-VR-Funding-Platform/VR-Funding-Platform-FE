import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Route path="/users/:id" component={Dashboard} />
    </div>
  );
}

export default App;
