import React from "react";
import "./HeroSection.css";
import Hero from "../assests/hero.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function HeroSection() {
  return (
    // <div className="hero">
    //   <div className="contentLeft">
    //     <p id="mainHeading">You don’t have to Fight them Alone.</p>
    //     <p id="subHeading">
    //       Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
    //       curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
    //       hac massa gravida arcu interdum proin curae.
    //     </p>
    //     <div >
    //     <input type="text" placeholder="Share your Email-Id" />
    //     <button className="inBtn">Lets Talk</button>
    //     </div>
    //   </div>
    //   <div className="contentRight">
    //     <img src={Hero} alt="Hero" />
    //   </div>
    // </div>

    <Container>
    <Row>
      <Col sm={12} md={6} lg={6} >
      <div className="contentLeft">
    <p id="mainHeading">You don’t have to Fight them Alone.</p>
         <p id="subHeading">
         Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
           curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
           hac massa gravida arcu interdum proin curae.
         </p>
          <input type="text" placeholder="Share your Email-Id" /> 
        {/* <button className="inBtn">Lets Talk</button> */}
       </div >
      </Col>
      <Col sm={12} md={6} lg={6}>
      <div className="contentRight mt-5">
        <img src={Hero} alt="Hero" />
     </div>
      </Col>
    </Row>
  
  </Container>








  );
}

export default HeroSection;
