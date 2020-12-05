import React from 'react';
import { Form, Button, Card } from "react-bootstrap";
import './LoginPage.css';

const LoginPage = () => {

return(


<Card style={{ width: '25rem'}}>
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
  
  {/* this button should take the user to the patient feed page */}
  <Button variant="primary" type="submit" Button style={{margin: "10px"}}>
    Submit
  </Button>

  {/* this button should take the user to the Provider Login Page */}
  <Button variant="primary" type="submit" label="NewPatientButton">
    New Patient
  </Button>
</Form>
</Card.Body>
</Card>

);
}
export default LoginPage;