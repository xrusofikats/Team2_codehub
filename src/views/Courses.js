import React, { useState, useEffect } from "react";
import Cardcourses from "../components/Cardcourses";
import { fetchCourses } from "../api";
import Loader from "../components/Loader";
import { Row,Col } from 'react-bootstrap';




const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const courses = await fetchCourses();

      setCourses(courses);
    };

    fetshData();
  }, []);


  return (

    <>
      <h1 style={{ margin: '2rem' }}>All Courses</h1>
      <Row>
        {courses.length > 0 ?
          <Cardcourses courses={courses} />
          : <Col xs={12}> <Loader /> </Col>
        }
      </Row>
    </>

  );

}

export default Courses;