import React, { useEffect, useState } from "react";
import { Form, CustomInput, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { fetchCourses, fetchCourse } from "../api/index";
import { useRouteMatch } from "react-router-dom";
import { updateCourse } from "../api";
import { useHistory } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';





const Update = () => {
    const history = useHistory();


    const [coursetitle, setCoursetitle] = useState("");
    const [duration, setDuration] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [bookable, setBookable] = useState(false);
    const [instructors, setInstructors] = useState([]);
    const [description, setDescription] = useState("");
    const [check, setCheck] = useState(false)
    const [check1, setCheck1] = useState(false)

    const [date, setDate] = useState({
        start_date: "",
        end_date: ""
    });
    const [price, setPrice] = useState({
        early_bird: "",
        normal: ""
    });


    const match = useRouteMatch();
    useEffect(() => {
        const fetshCourse = async () => {
            try {
                const course = await fetchCourse(match.params.id);
                console.log(course)
                setCoursetitle(course.title)
                setDuration(course.duration)
                setImagePath(course.imagePath)
                setBookable(course.open)
                setInstructors(course.instructors)

                setDescription(course.description)
                setDate(course.dates)
                setPrice(course.price)

            } catch (error) {
                history.push("/notfound")
            }


        };
        fetshCourse();

    }, [match.params.id])

    const [courses, setCourses] = useState([]);
    

    useEffect(() => {
        const fetshData = async () => {
            const courses = await fetchCourses();

            setCourses(courses);
        };

        fetshData();
    }, []);


    const onInputChange = (event, setState) => {
        const value = event.target.value;
        const name = event.target.name;


        if (name === "end_date" || name === "start_date") {
            setState((date) => ({
                ...date,
                [name]: value
            }));
        }
        else if (name === "early_bird" || name === "normal") {
            setState((price) => ({
                ...price,
                [name]: value
            }));
        }
        else if (name === "bookable") {
            setState((bookable) => !bookable);
        }
        else if (name === "01" || name === "02") {
            if (name === "01" && check === false) {
                setCheck(true)
                setState([...instructors, name])

            }
            else if (name === "02" && check1 === false) {
                setCheck1(true)
                setState([...instructors, name])
            }
            else { setState([...instructors]) }
           
        }

        else {
            setState(value);
        }
    };

    const handleUpdatecourse = () => {

        const newData = {

            "id": match.params.id,
            "title": coursetitle,
            "imagePath": imagePath,
            "price": {
                "normal": normal,
                "early_bird": early_bird
            },
            "dates": {
                "start_date": start_date,
                "end_date": end_date
            },
            "duration": duration,
            "open": bookable,
            "instructors": instructors,
            "description": description
        }
        updateCourse(newData)
        console.log(newData)

        setCourses([...courses, newData]);

        history.push("/")


    }



    const { start_date, end_date } = date;
    const { early_bird, normal } = price;



    return (

        <Card>
            <CardBody style={{ backgroundColor: '#d6f5d6' }}>
                <Form style={{ margin: '3rem' }}>
                    <h2>Update Course</h2>
                    {[
                        { field: "title", state: coursetitle, type: "text", placeholder: "Title", setState: setCoursetitle },
                        { field: "duration", state: duration, type: "text", placeholder: "Duration", setState: setDuration },
                        { field: "imagePath", state: imagePath, type: "text", placeholder: "Image Path", setState: setImagePath }
                    ].map(({ field, state, type, placeholder, setState }) => (
                        <FormGroup >
                            <Label for="title"><h5>{placeholder}: </h5></Label>
                            <Input style={{ backgroundColor: 'white' }}
                                plaintext value={state}
                                type={type}
                                name={field}
                                onChange={(e) => onInputChange(e, setState)} />
                        </FormGroup>
                    ))
                    }
                    {[{ field: "bookable", state: bookable, type: "checkbox", setState: setBookable }]
                        .map(({ field, state, type, setState }) => (
                            <FormGroup style={{ margin: '2rem' }}>
                                <h5><CustomInput
                                    type={type}
                                    id="bookable"
                                    label="Bookable"
                                    name={field}
                                    checked={state}
                                    onClick={(e) => onInputChange(e, setState)} /></h5>
                            </FormGroup>))
                    }
                    <hr />

                    {[{ field: "01", state: instructors, type: "checkbox", placeholder: "John Tsevdos", setState: setInstructors }]
                        .map(({ field, state, type, setState }) => (
                            <FormGroup style={{ margin: '2rem' }}>
                                <h2 style={{ margin: '2rem' }}>Instructors</h2>
                                <h5><CustomInput
                                    type={type}
                                    id="01"
                                    label="John Tsevdos"
                                    name={field}
                                    checked={instructors[0] || instructors[1]}
                                    // value={state}
                                    onChange={(e) => onInputChange(e, setState)} /></h5>
                            </FormGroup>))
                    }
                    {[{ field: "02", state: instructors, type: "checkbox", placeholder: "Yiannis Nikolakopoulos", setState: setInstructors }]
                        .map(({ field, state, type, setState }) => (
                            <FormGroup style={{ margin: '2rem' }}>
                                <h5><CustomInput
                                    type={type}
                                    name={field}
                                    checked={instructors[0] || instructors[1]}
                                    id="02"
                                    label="Yiannis Nikolakopoulos"
                                    onChange={(e) => onInputChange(e, setState)} /></h5>
                            </FormGroup>))
                    }

                    <hr />
                    {[{ field: "description", state: description, type: "textarea", placeholder: "Description", setState: setDescription }]
                        .map(({ field, state, type, setState }) => (
                            <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                                <Label for="exampleText"><h5>Description: </h5></Label>
                                <Input

                                    type={type}
                                    name={field}
                                    value={description}
                                    id="exampleText"
                                    onChange={(e) => onInputChange(e, setState)}
                                />
                            </FormGroup>))
                    }

                    <hr />
                    {[{ field: "start_date", state: start_date, type: "date", placeholder: "Start Date:", setState: setDate },
                    { field: "end_date", state: end_date, type: "date", placeholder: "End Date:", setState: setDate }]
                        .map(({ field, state, type, setState, placeholder }) => (<>
                            <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                                <h2 style={{ margin: '2rem' }}>Dates</h2>

                                <Label for="exampleDate"><h5>{placeholder} </h5></Label>
                                <Input
                                    type={type}
                                    name={field}
                                    value={state}
                                    id="start_date"
                                    placeholder={placeholder}
                                    onChange={(e) => onInputChange(e, setState)}
                                />
                            </FormGroup>

                        </>))
                    }

                    <hr />
                    {[{ field: "early_bird", state: early_bird, type: "number", placeholder: "0", setState: setPrice },
                    { field: "normal", state: normal, type: "number", placeholder: "0", setState: setPrice },]
                        .map(({ field, state, type, setState, placeholder }) => (<>

                            <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                                <h2 style={{ margin: '2rem' }}>Price:</h2>

                                <Label for="exampleNumber"><h5>Price: {field} </h5></Label>
                                <Input
                                    min='0'
                                    type={type}
                                    name={field}
                                    value={state}
                                    placeholder={placeholder}
                                    onChange={(e) => onInputChange(e, setState)}
                                />
                            </FormGroup>

                        </>))
                    }
                    <hr />
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button color="primary" style={{ margin: "1rem", position: 'absolute', right: 50 }}
                                onClick={handleUpdatecourse}>Update Course</Button>
                        </Col>
                    </FormGroup>

                    <br />

                </Form>
            </CardBody>
        </Card>





    );
};

export default Update;