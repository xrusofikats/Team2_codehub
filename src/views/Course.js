import React, { useEffect, useState } from "react";
import Coursedetails from "../components/Coursedetails";
import { useRouteMatch } from "react-router-dom";
import { fetchCourse } from "../api";
import Loader from "../components/Loader";
import { Col } from 'react-bootstrap';
import { fetchInstructors, fetchCourses } from "../api/index";
import { deleteCourse} from "../api";
import { useHistory } from 'react-router-dom';




const Course = () => {
    const history = useHistory();

    const match = useRouteMatch();
    const [course, setCourse] = useState(null);
    const [instr, setInstr] = useState([]);
    const [courses, setCourses] = useState([]);


  useEffect(() => {
    const fetshData = async () => {
      const courses = await fetchCourses();

      setCourses(courses);
    };

    fetshData();
  }, []);


    useEffect(() => {
        const fetshCourse = async () => {
            const course = await fetchCourse(match.params.id);

            setCourse(course);
        };

        fetshCourse();
    }, [match.params.id])


    useEffect(() => {
        const fetchTheinstructors = async () => {
            const response = await fetchInstructors();
            setInstr(response);
        };
        fetchTheinstructors();


    }, []);

    const handleDelete = async () => {
        await deleteCourse(course.id)
        history.push("/")

    };


    return (
        <> {course ?
            (<Coursedetails {...course}
                handleDelete={handleDelete}
                instr={instr}
                 />)
            : <Col xs={12}> <Loader /> </Col>
        }
        </>


    );

};

export default Course;