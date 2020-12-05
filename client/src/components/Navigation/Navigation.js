import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
import "./Navigation"

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Navbar.Brand href="#home" Text style={{color: "white"}}>Millennial Health Inc.</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/" Text style={{color: "white"}}>Home </NavLink>
          <NavLink to="/new" Text style={{color: "white"}}> New Visit</NavLink>
          <NavLink to="/new" Text style={{color: "white"}}> About us</NavLink>
        </Nav>
        <Form inline className="time">
          <Time/>
        </Form>
      </Navbar>
    </>
  )
}

export default Navigation;



