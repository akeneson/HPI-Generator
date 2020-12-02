import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import HomePage from '../Home/HomePage'
import Time from '../CurrTime/CurrTimePage'

const test = "hello!";

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">HPI</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new">New Visit</NavLink>
        </Nav>
        <Form inline className="time">
          <Time/>
        </Form>
      </Navbar>
    </>
  )
}

export default Navigation;