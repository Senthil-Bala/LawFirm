import React from "react";
import "./Main.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Main() {
  return (
    // <div className="main ">
    //   <div className="left">
    //     <p>Let’s Introduce Ourself</p>
    //   </div>
    //   {/* <hr /> */}
    //   <div className="right">
    //     <p id="heading">Criminal Lawyer</p>
    //     <p id="subHeading">
    //       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //       sint. Velit officia consequatduis enim velit mollit Exercitation.
    //     </p>
    //   </div>
    // </div>

    //Grid layouts

    <Container className="mt-5 pt-5">
    <Row>
      <Col sm={12} md={6} lg={6}>
      <div className="left">
        <p>Let’s Introduce Ourself</p>
      </div>
      </Col>
      <Col  sm={12} md={6} lg={6}>
      <div className="right">
        <p id="heading">Criminal Lawyer</p>
        <p id="subHeading">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
      </Col>
    </Row>
   
  </Container>
  );
}

export default Main;
