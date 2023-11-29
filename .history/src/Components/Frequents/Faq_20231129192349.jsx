import React from "react";
import Accordionss
import "./Faq.css"
function Faq() {
  return (
    <div className="text-center my-3">
      <div className="faq mt-5">
        <h1 className="m">FAQ</h1>
        <p className="faqContent">
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="accordions mt-5">
        <Accordions/>
      </div>
    </div>
  );
}

export default Faq;
