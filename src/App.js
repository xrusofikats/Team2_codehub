import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './views/Dashboard';
import Course from './views/Course';
import Courses from './views/Courses';
import AddCourse from './views/AddCourse';
import Errorpage from './views/Errorpage';
import { Container } from 'reactstrap';
import Navibar from './components/Navibar';
import Update from './views/Update';






const App = () => {



  return (
    <BrowserRouter>
      <Container className="themed-container" fluid={true}>
        <Navibar />
        <Switch>
          <Route exact path="/"><Dashboard /></Route>
          <Route exact path="/courses"><Courses /></Route>
          <Route exact path="/courses/:id"><Course /></Route>
          <Route exact path="/add-course"><AddCourse /></Route>
          <Route exact path="/courses/:id/edit"><Update /></Route>

          <Route exact path="/notfound" ><Errorpage /></Route>
          <Route exact ><Errorpage /></Route>


        </Switch>
      </Container>

    </BrowserRouter>

  );
};

export default App;
