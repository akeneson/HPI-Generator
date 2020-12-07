import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form, Jumbotron, Container} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
import "./Navigation";
import bgimage from './BG.jpg'




const Navigation = () => {
  return (
    <>
    
    <Jumbotron style={{ backgroundImage: `url(${bgimage})` , backgroundSize: "cover"}}>
    </Jumbotron>
    <Navbar bg="primary" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
          <NavLink to="/" Text style={{color: "white", padding: 30, fontSize: 25}}>Home </NavLink>
          <NavLink to="/new" Text style={{color: "white", padding: 30, fontSize: 25}}> New Visit</NavLink>
          <NavLink to="/new" Text style={{color: "white", padding: 30, fontSize: 25}}> About us</NavLink>
      
    </Nav>
        <Navbar.Brand href="#home" style={{alignSelf:"center"}} Text style={{color: "white" , fontSize: 50 , fontFamily: "Sacromento" }}>Millennial Health Inc.</Navbar.Brand>
    <Time/>
  </Navbar.Collapse>
</Navbar>


      {/* <Navbar bg="primary" variant="light">
        <Navbar.Brand href="#home" Text style={{color: "white" , fontSize: 50 , fontFamily: "Sacromento" }}>Millennial Health Inc.</Navbar.Brand>
       
          
     
      </Navbar> */}
    </>
  )
}

export default Navigation;



