import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

const CTA = props =>{

  return(
    <Card>
      <CardHeader tag="h3">Welcome!</CardHeader>
      <CardBody>
        <CardText>CTA TEXT HERE!</CardText>
        <CardText>Below you will find examples of current projects</CardText>
      </CardBody>
    </Card>
  )}


export default CTA;
