import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import './Duration.css'
 
import "react-datepicker/dist/react-datepicker.css";
 
const Duration = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate);
  const sdate = new Date(startDate).toDateString();
  const edate = new Date(endDate).toDateString();

  return (
    <Container>
        <Row>
            <Col md={{ span: 2, offset: 1 }}><DatePicker selected={startDate} onChange={date => setStartDate(date)} />Start Date</Col>
            <Col md={{ span: 3, offset: 3 }}><DatePicker selected={endDate} onChange={date => setEndDate(date)} />End Date</Col>
        </Row>
        <Row className="dates">
            <h4>Start Date: {sdate} </h4><br/>
        </Row>
        <Row>
            <h4>End Date: {edate} </h4>
        </Row>
        <Row>
            <h4>Total Days:</h4>
        </Row>
    </Container>
  );
};

export default Duration;