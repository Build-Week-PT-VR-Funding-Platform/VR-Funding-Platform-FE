import React from 'react';
import { Card, CardHeader, CardBody, CardText, Spinner } from 'reactstrap';

const CTA = props =>{

  return(
    <Card>
      <CardHeader tag="h3">Welcome!</CardHeader>
      <CardBody>
        <CardText><h5>What are we about?</h5></CardText>
        <CardText>We are here to provide <strong>YOU</strong> with a platform to access business training, project capital, and mentorship. 
          <br /> In case you didn't see our fancy animation on the loading screen because our website is so efficient: 
          <Spinner color="danger" />
        </CardText>
      </CardBody>
    </Card>
  )}


export default CTA;
