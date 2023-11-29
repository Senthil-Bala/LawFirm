import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Left from "../assests/left.png";
import Right from "../assests/right.png";
import "./Practices.css";

function Practices() {
  return (
    <div>
      <h1 className="text-center my-5 heading">Area of Practices</h1>

      <Container>
        <Row className="mt-3">
          <Col xs={12} sm={4}>
            <img src={Left} alt="Business law" className="left" />
            <p className="title">Business law</p>

          </Col>
          <Col xs={12} sm={8}>
            <img src={Right} alt="Partnership Law" className="right" />
            <p className="title">Partnership law</p>

          </Col>
        </Row>
        <Row className="mt-3">
        <Col xs={12} sm={4}>
            <img src={Right} alt="Partnership Law" className="right" />
            <p className="title">Real Estate law</p>
          </Col>
          <Col xs={12} sm={8}>
            <img src={Left} alt="Business law" className="left" />
            <p className="title">Business law</p>

          </Col>
          
        </Row>
        <Row className="mt-3">
          <Col xs={12} sm={8}>
            <img src={Left} alt="Business law" className="left" />
            <p className="title">LandLord Disruptes law</p>

          </Col>
          <Col xs={12} sm={4}>
            <img src={Right} alt="Partnership Law" className="right" />
            <p className="title">ELDER ABSUTES</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Practices;
