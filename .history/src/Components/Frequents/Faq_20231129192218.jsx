import React from "react";
import Accordionss from "./Accordionss"
import "./Faq.css"
function Faq() {
  return (
    <div className="text-center m">
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
