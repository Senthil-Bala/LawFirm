import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footerDiv'>
        <div className="firstDiv d-flex justify-content-around">
           <div>
            <img src="" alt="logo" />
            <p></p>
           </div>
           <div className="mainDiv d-flex justify-content-">
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
           </div>
           <div>
            <img src="" alt="" />
           </div>
        </div>
        <div className="secondDiv d-flex justify-content-center gap-2">
            <p>© 2020 Acme. All rig</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>

    </div>
  )
}

export default Footer