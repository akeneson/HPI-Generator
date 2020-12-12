import React, { useContext, useState }  from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form, Jumbotron, Container, Row, Col, Card} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'
// import LogOptions from "../LogOptions/LogOptions"
import UserContext from '../../Context/UserContext';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

            
const Navigation = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push('/register')
  const login = (e) => {
    e.preventDefault();
    history.push('/login')
  }

  const logout = (e) => {
    e.preventDefault();
      setUserData({
        token: undefined,
        user: undefined
      });
      localStorage.setItem("auth-token", "");
      history.push('/login')
    };
    // console.log('USER DATA:', userData)
  return (
    <>
    <body className="backimage mb-5">
 <Container>
    <Card.Title className="companyName">Millennial Health Inc.</Card.Title> 
    </Container>
    </body>

    <Navbar expand="lg" className="mb-5">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto ">

    <Nav.Link href="/home"><h4>HOME</h4></Nav.Link>
    {userData.user ?(
      <Nav.Link onClick={logout} href="/"><h4>LOGOUT</h4></Nav.Link>
    ) :(
      <>
      <Nav.Link onClick={register} href="/register"><h4>REGISTER</h4></Nav.Link>
      <Nav.Link onClick={login} href="/login"> <h4>LOGIN</h4></Nav.Link>
      </>
    )} 
      {/* <Nav.Link href="/register"><h4>REGISTER</h4></Nav.Link>
      <Nav.Link href="/login"><h4>LOGIN</h4></Nav.Link> */}
      <Nav.Link href="/about"><h4>ABOUT US</h4></Nav.Link>  
       
    </Nav>
    {/* <LogOptions className="mx-auto"/> */}
    {/* <Time/> */}
  </Navbar.Collapse>

</Navbar>
</>

      // {/* <Navbar bg="primary" variant="light">
      //   <Navbar.Brand href="#home" Text style={{color: "white" , fontSize: 50 , fontFamily: "Sacromento" }}>Millennial Health Inc.</Navbar.Brand>
       
          
     
      // </Navbar> */}
      
  )
}
export default Navigation;