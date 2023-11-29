import React from 'react'
import "./Footer.css";
import logo from "../assests/logo.png";
import Group from "../assests/group.png"
function Footer() {
  return (
    <div className='footerDiv my-3'>
        <div className="firstDiv">
           <div className='logoDiv'>
            <img src={logo} alt="logo" />
            <p>IGSTUDIO</p>
           </div>
           <div className="mainDiv ">
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
           </div>
           <div>
            <img src={Group} alt="Icons" />
           </div>
        </div>
        <br />
        <div className="secondDiv ">
            <p>© 2020 Acme. All rig</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>

    </div>
  )
}

export default Footer