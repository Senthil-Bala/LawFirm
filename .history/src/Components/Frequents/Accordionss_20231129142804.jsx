import Accordion from "react-bootstrap/Accordion";
import "./Accordionss.css";
function Accordions() {
  return (
    <Accordion className="acco" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='headers'>Do I need a personal injury report?</Accordion.Header>
        <Accordion.Body classname='bodies'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='headers'>How much is my case worth?</Accordion.Header>
        <Accordion.Body classname='bodies'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='headers'>
          What should I do right after car accidect
        </Accordion.Header>
        <Accordion.Body classname='bodies'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='headers'>How much is my case worth?</Accordion.Header>
        <Accordion.Body classname='bodies'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;
