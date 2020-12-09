import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form, Jumbotron, Container} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
import LogOptions from "../LogOptions/LogOptions"
import bgimage from "./BG.jpg"

const jumbotronStyles = 
{ 
    height: '270px',  
    
    backgroundImage: `url(${bgimage})`, 
    backgroundSize: 'cover',
    backgroundwidth: '100%',
    backgroundheight: 'auto',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center'

}
            


const Navigation = () => {
  return (
    <>
    
    <Jumbotron bg-cover style={jumbotronStyles} >

    </Jumbotron>
    <Navbar bg="primary" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{alignSelf: "center"}}>
          <NavLink to="/" Text style={{color: "white", padding: 30, fontSize: 25, borderBottom: "3px solid white", borderTop: "3px solid white" }}>Home </NavLink>
          <br></br>
          <NavLink to="/new" Text style={{color: "white", padding: 30, fontSize: 25, borderBottom: "3px solid white", borderTop: "3px solid white"}}> New Visit</NavLink>
          <br></br>
          <NavLink to="/new" Text style={{color: "white", padding: 30, fontSize: 25, borderBottom: "3px solid white", borderTop: "3px solid white"}}> About us</NavLink>
      
    </Nav>
        
    <LogOptions />
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