import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HPIFeedCell from "./HPIFeedCell";
import { useHistory } from 'react-router-dom';
import UserContext from '../Context/UserContext';


const FeedPage = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const user = [userData.user]


   //redirects user to login page if not logged in
   useEffect(() => {
    if (!userData.user) history.push("/login")
    console.log("HPI Card userData: ", [userData])
     }) 


    return (
        <Container className="my-4">
            <Row>
              <Col sm={12}>
                  
                  <HPIFeedCell/>
              </Col>
            </Row>
        </Container>
      );
}

export default FeedPage;
