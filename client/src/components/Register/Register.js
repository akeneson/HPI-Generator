import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Form, Button, Card } from "react-bootstrap";
import './Register.css'


const RegisterPage = () => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [passwordCheck, setPasswordCheck] = useState();
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [gender, setGender] = useState();
const [dob, setDob] = useState();

return(


  
  <Card>
    <Card.Body>
        <Form>
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
        </Form.Group>
    
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPasswordCheck(e.target.value)} placeholder="Confirm Password" />
          <Form.Text className="text-muted">
            Please re-enter the password.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="string" onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="string" onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group controlId="formBasicGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="string" onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
        </Form.Group>

        <Form.Group controlId="formBasicDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" />
        </Form.Group>

        {/* this button should take the user to the patient feed page */}
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Card.Body>
  </Card>
);
}

export default RegisterPage;