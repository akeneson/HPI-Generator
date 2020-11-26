import React, { useState } from "react";
import { Link} from "react-router-dom";

import DatePicker from "react-datepicker";
import { Navbar, Nav} from "react-bootstrap";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Navigation = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link to="/">Home</Nav.Link>
      <Nav.Link href="/duration">duration</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar>

</>




  );
};

export default Navigation;