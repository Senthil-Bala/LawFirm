import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Daniel from "../assests/Daniel.png";
import Sanfole from "../assests/Sanfole.png";
import Casforila from "../assests/Casforila.png";
import Collean from "../assests/Collean.png";
import Haldone from "../assests/Haldone.png";
import Nik from "../assests/Nik.png"
import "./Team.css"

function Team() {
  return (
    <div className='teamDiv my-3'>
        <h1 className="text-center mt-5 heading">Our Team</h1>

        <Container>
        <Row>

        <Col xs={6} md={4} lg={4} className='mt-5'>
            <div className="items d-flex pt-1 ">
        <img src={Daniel} alt="" className='mr-3'/>
        <div>
          <h6 >Daniel Def</h6>
          <p className="opac">301 Cases</p>
          </div>
          </div>
        </Col>

        <Col xs={6} md={4} lg={4} className='mt-5'>
            <div className="items d-flex sanfole pt-1 ">
        <img src={Sanfole} alt="" className='mr-3 '/>
        <div>
          <h6>Sanfole</h6>
          <p className="opac">850 Cases</p>
          </div>
          </div>
        </Col>

        <Col xs={6} md={4}  lg={4} className='mt-5'>
            <div className="items d-flex pt-1">
        <img src={Casforila} alt="" className='mr-3'/>
        <div>
          <h6 >Casforila</h6>
          <p className="opac">470 Cases</p>
          </div>
          </div>
        </Col>

        <Col xs={6} md={4} lg={4} className='mt-5'>
            <div className="items d-flex pt-1 ">
        <img src={Collean} alt="" className='mr-3'/>
        <div>
          <h6 >Collean</h6>
          <p className="opac">180 Cases</p>
          </div>
          </div>
        </Col>

        <Col xs={6} md={4}  lg={4} className='mt-5'>
            <div className="items d-flex pt-1">
        <img src={Haldone} alt="" className='mr-3'/>
        <div>
          <h6 >Haldone</h6>
          <p className="opac">212 Cases</p>
          </div>
          </div>
        </Col>

        <Col xs={6} md={4}  lg={4} className='mt-5'>
            <div className="items d-flex p-2">
        <img src={Nik} alt="" className='mr-3'/>
        <div>
          <h6 >Nik Joe</h6>
          <p className="opac">350 cases</p>
          </div>
          </div>
        </Col>

      </Row>
      </Container>
    </div>
  )
}

export default Team