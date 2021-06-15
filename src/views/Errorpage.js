import React from "react";
import {  Button } from 'reactstrap';




const Errorpage = () => {
    return (
        <>
           
            <h1>Error ...</h1>
            <hr/>
            <h1>WE CANNOT FIND THE PAGE YOU ARE LOOKING FOR!!</h1>
            <Button color="warning" size="lg" href="/" block>Click here to return to the homepage!</Button>

        </>
    );

};

export default Errorpage;