import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import EntrepreneurCard from './EntrepreneurCard.js';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const Entrepreneur = props => {
  const[user, setUser] = useState();

  useEffect(() => {
    const { id } = props.match.params;

    axiosWithAuth().get(`https://vr-fund-platform.herokuapp.com/users/${id}`).then(res => {
      console.log(res);
      setUser(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [props.match.params])

  if(!user) {
    return <div>
     <h3>Loading...</h3>
     <Spinner color="primary" />
     </div>
  }

  return (
    <div className="project text-center">
      <EntrepreneurCard
      username={user.username}
      id={user.id}
      />
      <Link to="/entrepreneurs" className="project-link"><Button color="primary">Back to Entrepreneurs</Button></Link>
    </div>
  )
}

export default Entrepreneur;
