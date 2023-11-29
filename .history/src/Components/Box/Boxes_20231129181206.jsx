import React from "react";
import "./Boxes.css";
import Box from "../";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Boxes() {
  return (
    // <div className="box">
    //   <h1>Why Choose us ?</h1>
    //   <br />
    //   <div className="chooseBox">
    //     <div className="box1">
    //       <img src={Box} alt="" className="mt-2" />
    //       <h4 className="mt-4">100 Success Rate</h4>
    //       <p className="small">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequatduis enim velit mollit Exer.
    //       </p>
    //     </div>
    //     <div className="box2">
    //       <img src={Box} alt="" className="mt-2" />
    //       <h4 className="mt-4">100 Success Rate</h4>
    //       <p className="small">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequatduis enim velit mollit Exer.
    //       </p>
    //     </div>
    //     <div className="box3">
    //       <img src={Box} alt="" className="mt-2" />
    //       <h4 className="mt-4">100 Success Rate</h4>
    //       <p className="small">
    //         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    //         sint. Velit officia consequatduis enim velit mollit Exer.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    //Grid layouts
  
<div>
<h1  className="text-center my-5 heading">Why Choose us ?</h1>

<Container>
<Row className="gx-4 gy-4">
        <Col sm={12} md={6} lg={4} >
        <div className="box1 mt-2 mr-2">
          <img src={Box} alt="" className="mt-2" />
          <h4 className="mt-4">100 Success Rate</h4>
          <p className="small">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="chip">Read More</button>
        </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <div className="box2 mt-2 mr-2">
          <img src={Box} alt="" className="mt-2" />
          <h4 className="mt-4">100 Success Rate</h4>
          <p className="small">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="chip" >Read More</button>
        </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <div className="box3 mt-2 mr-2">
          <img src={Box} alt="" className="mt-2" />
          <h4 className="mt-4">100 Success Rate</h4>
          <p className="small">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="chip">Read More</button>
        </div>
        </Col>
      </Row>
     
    </Container>
    </div>

  );
}

export default Boxes;
