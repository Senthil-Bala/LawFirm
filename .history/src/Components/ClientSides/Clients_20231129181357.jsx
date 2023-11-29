import React from "react";
import "./Clients.css";
import EclipseOne from "../";
import EclipseTwo from "./assests/EclipseTwo.png";
import EclipseThree from "./assests/EclipseThree.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Clients() {
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
    <div className="clientHead d-flex justify-content-between align-items-center">
<h1  className=" my-5 heading">What Says Our <br /> Happy Clients</h1>
<div className="arrows">
<button>L</button>
<button className="rgt">R</button>
</div>


</div>
<Container>
<Row className="gx-4 gy-4">
        <Col sm={12} md={6} lg={4} >
        <div className="box1 mt-2 mr-2">
          <img src={EclipseOne} alt="" />
          <h4 className="mt-2">Joe Kooper</h4>
          <p >Ceo Of Hunt</p>
          <p className="small">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="chip">Read More</button>
        </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <div className="box2 mt-2 mr-2">
          <img src={EclipseTwo} alt="" className="mt-2" />
          <h4 className="mt-2">Robert Fox</h4>
          <p >Ceo Of Hunt</p>
          <p className="small">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="chip" >Read More</button>
        </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <div className="box3 mt-2 mr-2">
          <img src={EclipseThree} alt="" className="mt-2" />
          <h4 className="mt-2">Devon Lane</h4>
          <p >Ceo Of Hunt</p>
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

export default Clients;
