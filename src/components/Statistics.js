import { Card, CardBody, CardText,  Badge } from 'reactstrap';
import React from "react";



const Statistics = ({ title, amount }) => {


  return (
    <Card>

    <CardBody>

      <CardText>

        {title.toUpperCase()}: <Badge>{amount}</Badge>

      </CardText>

    </CardBody>

  </Card>
  );

};

export default Statistics;