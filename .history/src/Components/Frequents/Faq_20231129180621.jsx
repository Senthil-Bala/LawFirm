import React from "react";
import Acc
import "./Faq.css"
function Faq() {
  return (
    <div className="d-flex justify-content-between my-5">
      <div className="faq my-4">
        <h1>FAQ</h1>
        <p className="faqContent">
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="accordions mt-5">
        {/* <Accordions/> */}
      </div>
    </div>
  );
}

export default Faq;
