import React from 'react';
import { Form, Button, Card } from "react-bootstrap";

const RegisterPage = () => {

return(

<Card style={{ width: '18rem', marginTop: 50, marginBottom: 50 }}>
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
  <Button variant="primary" type="submit">
    Submit
  </Button>

  {/* this button should take the user to the Provider Login Page */}
  <Button variant="primary" type="submit" label="Provider">
    Provider
  </Button>
</Form>
</Card.Body>
</Card>

);
}
export default RegisterPage;