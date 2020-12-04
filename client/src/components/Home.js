import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Home = () => {
    const symptoms = ["Head", "Eyes", "Ears", "Nose", "COVID", "Neck", "Back", "Arms", "Wrist", "Hand", "Legs", "Ankle", "Foot", "Chest", "Cough", "Shortness of Breath", "Abdomen", "Urinary"]

    return (
        <React.Fragment>
            <h1> Duration React Page Testing </h1>

            <Container>
      <Row>
        <h3>What is your main symptom today? (pick one)</h3>
      </Row> 
      <Row>
        <Col md="6" className="Btn">
          {symptoms.map((symptom) =>(
                <Button  color="success">{symptom}</Button>
            ))}
        </Col>
        <Col md="6"><img src="https://blog.placeit.net/wp-content/uploads/2018/09/Medical-Icons-for-Healthcare-Logos2.png"/></Col>
      </Row>
      <Row>
      <Col><Button color="primary" size="lg" block>Next</Button></Col>
      </Row>
    </Container>



    
        </React.Fragment>
    );
};

export default Home;