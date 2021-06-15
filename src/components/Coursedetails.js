import React from "react";
import Image from 'react-bootstrap/Image'
import {
    Row, Col,
    Button
} from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Dates from "./Dates"




const Coursedetails = ({ id, title, open, price, dates, duration, imagePath, description, instructors, handleDelete, handleEdit, instr }) => {



    return (


        <>
            <div key={id}>
                <h1 style={{ margin: '2rem' }}>{title} ({id})</h1>
                <Image src={imagePath} fluid style={{ width: 2000, height: 400 }} />
                <hr />

                <Row style={{ margin: '2rem' }}>
                    <Col xs={6}>
                        <h2> Price: {price.normal} €</h2>
                        <h2> Bookable: {open ? "✅" : "❌"}</h2>
                    </Col>
                    <Col xs={6}>
                        <h2 className="text-right">
                            Duration: {duration}</h2>
                        <h2 className="text-right">
                            Dates: <Dates dates={dates} /></h2>
                    </Col>
                </Row>

                <h5 dangerouslySetInnerHTML={{ __html: description }} />

                <ListGroup horizontal style={{ margin: 10 }}>
                    <Button color="primary" style={{ margin: '1rem' }} href={`/courses/${id}/edit`}>Edit</Button>
                    <Button color="danger" style={{ margin: '1rem' }} onClick = {handleDelete}  >Delete</Button>
                </ListGroup>
                <footer>
                    <>
                        <h2>Instructors</h2>

                        {(instructors[0] === '01' || instructors[0] === '02') &&
                            instr.slice(((instructors[0] * 10 / 10) - 1), (instructors[0] * 10 / 10)).map(({ id, name, dob, email, linkedin, bio }) =>
                                <div key={id}><h3>{name.first} {name.last} ({dob})</h3>
                                    <h5>Email: <a href="https://mail.google.com/">{email}</a> | <a href={linkedin}>Linkedin</a></h5>
                                    <h5>{bio}</h5>
                                </div>)}
                                

                        {(instructors[1] === '01' || instructors[1] === '02') &&
                            instr.slice(((instructors[1] * 10 / 10) - 1), (instructors[1] * 10 / 10)).map(({ id, name, dob, email, linkedin, bio }) =>

                                <div key={id}><h3>{name.first} {name.last} ({dob})</h3>
                                    <h5>Email: <a href="https://mail.google.com/">{email}</a> | <a href={linkedin}>Linkedin</a></h5>
                                    <h5>{bio}</h5>
                                </div>)}
                    </>
                </footer>
            </div>


        </>
    );

};

export default Coursedetails;