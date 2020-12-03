import React from 'react';
import { Form, Button, Card } from "react-bootstrap";
import './Register.css'


const RegisterPage = () => {

return(
  <Card>
    <Card.Body>
        <Form>
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
  
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
          <Form.Text className="text-muted">
            Please re-enter the password.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="string" placeholder="Gender" />
        </Form.Group>

        <Form.Group controlId="formBasicDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Date of Birth" />
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