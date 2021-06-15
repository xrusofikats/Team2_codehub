import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from "reactstrap";


const Navibar = () => {
  const [stats, setStats] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetch("http://localhost:3001/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });

  }, []);

  return (
    <div>

      <Navbar color="dark" light expand="md" className="text-primary"   fixed="top" >
        <NavbarBrand href="/" style={{ color: "white" }} >Welcome to Code.Hub </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar />
          <NavLink href="/courses" style={{ color: "grey", marginRight: '20px' }} >Courses </NavLink>
          <NavLink href="/add-course" style={{ color: "grey" }}>Add new course</NavLink>

        </Collapse>
      </Navbar>
      <br />
      <br />
    </div>
  );
}

export default Navibar;