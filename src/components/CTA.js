import React from 'react';
import { Card, CardHeader, CardBody, CardText, Spinner } from 'reactstrap';

const CTA = props =>{

  return(
    <Card>
      <CardHeader tag="h3">Welcome!</CardHeader>
      <CardBody>
        <CardText>What are we about?</CardText>
        <CardText>We are here to provide <strong>YOU</strong> with limited resources and a platform to access buisness training, project capital, and mentorship. 
          <br /> Incase you didn't see our fancy animation on the loading screen because our website is so effecient. 
          <Spinner color="danger" />
        </CardText>
      </CardBody>
    </Card>
  )}


export default CTA;
