import React from 'react'
import "./Subscribe.css"
function Subscribe() {
  return (
    <div className='subscribes mt-3'>
    <div className="newsLetter">
<h1 className='text-center mt-2'>Subscribe Our NewsLetter</h1>
</div>
<div className=" d-flex">
    {/* <input type="text"  />
    <input type="text"  /> */}
    <button id='send'>Send</button>
</div>
    </div>
  )
}

export default Subscribe