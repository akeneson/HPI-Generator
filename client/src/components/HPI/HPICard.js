import React, { useState, useEffect  } from "react";
import "./HPICardStyle.css";
import {Container, Row, Col} from 'react-bootstrap';
import { useLocation } from "react-router-dom";

import InputContext from '../../Context/InputContext';

const HPICard = (props) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.values); 
     }, [location]);
     
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <div className="card card-rounded m-4">
                    <div className="card-header">
                        <h3>HPI Generated</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <p>
                                Patient is a 44-year old female who reports {location.values ? location.values[0].symptoms : "Error" } pain for 5 days. 
                                She reports looking down at her computer screen for long periods of time.
                                She describes her pain as spasms and aching with no radiation. 
                                She rates her pain a 7/10 and is intermittent. 
                                Her pain is worse at the end of the day and better with rest, ice, and stretching. 
                                She denies fever, cough, nausea, or loss of bowel or bladder. She admits to headaches. 
                                She currently takes ibuprofen for her pain with mild relief. 
                                Her visit is via telemedicine today due to COVID-19 pandemic precautions.
                            </p>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
            
        </Container>
    );
}

export default HPICard;

