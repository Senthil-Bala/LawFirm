import React from 'react'
import "./Subscribe.css"
function Subscribe() {
  return (
    <div className='subscribes mt-3'>
    <div className="newsLetter">
<h1 className='text-center mt-2'>Subscribe Our NewsLetter</h1>
</div>
<div className=" d-flex jus">
    <input type="text" className='inputOne'/>
    <input type="text" className='inputOne' />
    <button id='send'>Send</button>
</div>
    </div>
  )
}

export default Subscribe