import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import EntrepreneurCard from './EntrepreneurCard.js';
import { Spinner } from 'reactstrap';

const Entrepreneurs = props => {
  const [userList, setUserList] = useState();

  useEffect(() => {
    axiosWithAuth().get('https://vr-fund-platform.herokuapp.com/users').then(res => {
      setUserList(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  if (!userList) {
    return <div>
     <h3>Loading...</h3>
     <Spinner color="primary" />
     </div>
  }

  return (
    userList.map((user, index) => {
      return ( 
        <div className="project text-center" key={index}>
          <EntrepreneurCard userObj={user} />
        </div>
    )})
  )
}

export default Entrepreneurs;
