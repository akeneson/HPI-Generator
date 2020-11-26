import React from "react";
import { Button, Container, Row, Col, Nav, Tab, Sonnet } from "react-bootstrap";
import PainLevel from '../PainLevel/PainLevel';
import Duration from '../Duration/DurationPage'
import "./HomePage.css"


const Home = (props) => {
  const symptoms = ["Head", "Eyes", "Ears", "Nose", "COVID", "Neck", "Back", "Arms", "Wrist", "Hand", "Legs", "Ankle", "Foot", "Chest", "Cough", "Shortness of Breath", "Abdomen", "Urinary"]
  const Durations = [
    "Today",
    "Yesterday",
    "2 Days ago",
    "3 Days ago",
    "4 Days ago",
    "5 Days ago",
    "6 Days ago"
    ]
    const Qualities = [
      "sharp",
      "burning",
      "pressure",
      "knifelike",
      "sore",
      "aching",
      "stabbing"
    ]
    const Radiations = [
      "head",
      'neck',
      'arm',
      'wrist',
      'hand',
      'finger',
      'chest',
      'upper abdomen',
      'lower abdomen',
      'upper back',
      'lower back',
      'groin',
      'legs',
      'calf',
      'ankle',
      'foot',
      'toes']
    const AssSymps = ['*fatigue',
      '*fever',
     '*chills',
      'abdominal pain',
      'nausea',
      'vomiting',
      'diarrhea',
      'constipation',
      'cough',
      'sputum production',
      'headache',
      'dizziness',
      'earache',
      'shortness of breath',
      'chest pain',
      'trouble eating',
      'rash',
      'bleeding',
      'bruising',
      'trouble talking',
      'trouble swallowing',
      'sore throat',
      'joint pain',
      'trouble walking',
      'vision changes',
      'eye discharge',
      'urinary frequency',
      'urinary urgency',
      'painful urination']
    const Pallatives = [
        "Rest", "Ice", "Heat", "Bandage", "Elevation", "Ibuprofen", "Tylenol", "Over-the-Counter Medications", "Inhaler", "Nebulizer Treatments", "Prescribed Medications", "Anti-Nausea Medication", "Anti-Dizziness Medication", "Cough Medication", "Antibiotics", "Ear Drops", "Splinting", "Standing", "Sitting", "Walking"
    ]
    const Provocatives = ['movement',
      'rest',
      'ice',
      'heat',
      'bandage',
      'elevation',
      'ibuprofen',
      'tyleno',
      'over-the-counter medications',
      'splinting',
      'standing',
      'sitting',
      'walking',
      'running',
      'touching',
      'pushing',
      'pulling',
      'lifting',
      'working out',
      'typing',
      'writing',
      'cooking',
      'washing dishes',
      'doing laundry',
      'mopping',
      'mowing the grass',
      'walking long distances',
      'sitting for long periods of time']
    const Qunatities = ['intermittent',
      'constant',
      'gradual',
      'acute onset']
  return (
    <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="tabs">
                <Nav.Link eventKey="first">Symptom</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Duration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Qulaity</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Severity</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Radiation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Asscociated Symptoms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">Pallative</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="eigth">Provocative</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ninth">Quantity</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h3>What is your main symptom today? (pick one)</h3>
                {symptoms.map((symptom) =>(
                  <Button  color="success" className="Btn">{symptom}</Button>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h3>How long.......</h3>
                  <Duration />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h3>What Kind</h3>
                  {Qualities.map((Quality) =>(
                    <Button  color="success" className="Btn">{Quality}</Button>
                  ))}
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h3>Pain Level</h3>
                  <img src="https://www.prohealth.com/wp-content/uploads/2015/04/pain-scale-859x305.jpg"></img>
                  <PainLevel/>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <h3>Radiation</h3>
                  {Radiations.map((Radiation) =>(
                    <Button  color="success" className="Btn">{Radiation}</Button>
                  ))}
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <h3>Asscociated Symptoms</h3>
                  {AssSymps.map((AssSymp) =>(
                    <Button  color="success" className="Btn">{AssSymp}</Button>
                  ))}
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <h3>Pallative</h3>
                  {Pallatives.map((Pallative) =>(
                    <Button  color="success" className="Btn">{Pallative}</Button>
                  ))}
              </Tab.Pane>
              <Tab.Pane eventKey="eigth">
                <h3>Provocative</h3>
                  {Provocatives.map((Provocative) =>(
                    <Button  color="success" className="Btn">{Provocative}</Button>
                  ))}
              </Tab.Pane>
              <Tab.Pane eventKey="ninth">
                <h3>Quantity</h3>
                  {Qunatities.map((Qunatity) =>(
                    <Button  color="success" className="Btn">{Qunatity}</Button>
                  ))}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Home;