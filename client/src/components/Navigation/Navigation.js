import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form, Jumbotron, Container} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
import LogOptions from "../LogOptions/LogOptions"
import bgimage from "./bg.jpg"


const jumbotronStyles = 
{ 
    height: '320px',  
    backgroundImage: `url(${bgimage})`, 
    backgroundSize: 'cover',
    backgroundwidth: '100%',
    backgroundheight: 'auto',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center',

}
            


const Navigation = () => {
  return (
    <>
    
    <Jumbotron bg-cover style={jumbotronStyles} >

    </Jumbotron>

    <Navbar expand="lg" className="mb-5">
  <Navbar.Brand className="gray d-block d-md-none">Millennial Health Inc.</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto ">
      <Nav.Link href="/home"><h4>HOME</h4></Nav.Link>
      <Nav.Link href="/register"><h4>NEW PATIENT</h4></Nav.Link>
      <Nav.Link href="/login"><h4>LOGIN</h4></Nav.Link>
      <Nav.Link href="/about"><h4>ABOUT US</h4></Nav.Link>
      <LogOptions/>
      <Time/>
    </Nav>
    {/* <LogOptions className="mx-auto"/> */}
    {/* <Time/> */}
  </Navbar.Collapse>
        
  
</Navbar>


      {/* <Navbar bg="primary" variant="light">
        <Navbar.Brand href="#home" Text style={{color: "white" , fontSize: 50 , fontFamily: "Sacromento" }}>Millennial Health Inc.</Navbar.Brand>
       
          
     
      </Navbar> */}
    </>
  )
}

export default Navigation;