import React from "react";
import { Col } from 'react-bootstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import Dates from "./Dates"



const Cardcourses = ({ courses }) => {


    return (

        <>

            {courses.length > 0 && courses.map(({ id, title, open, price, dates, duration, imagePath }) =>
                <Col xs={12} sm={6} md={4} key={id}>
                    <CardDeck style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", marginBottom: '1rem' }}>
                        <Card className="row" >
                            <CardBody col-6 >
                                <CardTitle tag="h5">{title}</CardTitle>

                                <CardImg top width="100%" src={imagePath} alt={title} style={{ display: 'flex' }} />

                                <CardSubtitle tag="h6" className="mb-2"> Price: <b>{price.normal}</b> € | Bookable: {open ? "✅" : "❌"}</CardSubtitle>

                                <CardSubtitle tag="h6" className="mb-2"> Duration: <b>{duration}</b></CardSubtitle>

                                <CardSubtitle tag="h6" className="mb-2"> Dates: <b><Dates dates={dates} /></b></CardSubtitle>

                                <Button color="primary" style={{ position: 'absolute', right: 50 }} href={`/courses/${id}`} > View </Button>
                                <br />


                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            )
            }




        </>



    )
}



export default Cardcourses;