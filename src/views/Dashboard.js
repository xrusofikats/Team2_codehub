import React, { useState, useEffect } from "react";
import {
  Jumbotron, Row, Col
} from "reactstrap";
import Statistics from "../components/Statistics";
import Coursestable from "../components/Coursestable";
import { fetchStats, fetchCourses } from "../api";
import Loader from "../components/Loader";


const Dashboard = () => {

  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([
        fetchStats(),
        fetchCourses(),
      ]);

      setStats(responseStats);
      setCourses(responseCourses);
    };
    fetshData();
  }, []);



  return (

    <>
      <Jumbotron style={{ marginTop: '3rem' }}>
        <h1 className="display-3">Welcome to code.hub </h1>
        <p>
          Manage everything and have fun!
      </p>
      </Jumbotron>

      <Row xs="5" >
        {stats.length > 0 ?
          stats.map(({ id, title, amount }) => (
            <Col key={id} xs={12} sm={6} md={3}>
              <Statistics title={title} amount={amount} />
            </Col>
          ))
          : (<Col xs={12}> <Loader /> </Col>)}
      </Row>

      <br />
      <br />

      <Row>
        <Col xs={12}>
          {courses.length > 0 ? <Coursestable courses={courses} />
            : <Col xs={12}> <Loader /> </Col>}
        </Col>
      </Row>

    </>
  );
};

export default Dashboard;