import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import HomePage from '../Home/HomePage'
import FeedPage from '../Feed';
import Time from '../CurrTime/CurrTimePage'

const test = "hello!";

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">HPI</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline className="time">
          <Time/>
        </Form>
      </Navbar>
      <FeedPage />
    </>
  )
}

export default Navigation;