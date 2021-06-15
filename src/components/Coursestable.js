import React from "react"
import { Card, CardHeader, CardFooter, CardBody, Table,  ButtonToggle } from 'reactstrap';
import Dates from "./Dates"



const Coursestable = ({ courses }) => {


    return (
        <Card>
            <CardHeader><b>Last 5 courses</b></CardHeader>
            <CardBody>
                <Table hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Bookable</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length > 0 && courses.slice(Math.max(courses.length - 5, 0)).map(({ id, title, open, price, dates }) =>
                            <tr key={id}>
                                <td>&#8505;</td>
                                <td>{title}</td>
                                <td>{open ? "✅" : "❌"}</td>
                                <td>{price.normal} €</td>
                                <td><Dates dates={dates}/></td>
                                <td><ButtonToggle color="info" href={`/courses/${id}`}>View Details</ButtonToggle></td>
                            </tr>


                        )
                        }


                    </tbody>
                </Table>
                <CardFooter style={{padding: "2rem"}}>
                    <ButtonToggle color="primary" href="/courses" style={{ position: 'absolute', right: 50 }}>View All</ButtonToggle>
                    <br/>
                </CardFooter>
            </CardBody>
        </Card>


    );

};

export default Coursestable;