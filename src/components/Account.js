import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.js';

function Account(props) {

  const [ user, setUser ] = useContext(UserContext);

  return (
    <div>
      <h1>Account Settings</h1>
    </div>
  );
};

export default Account;
