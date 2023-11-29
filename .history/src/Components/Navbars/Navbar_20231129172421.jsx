import React from 'react'
import Studio from "../Components//assests/logo.png";
import "../Components/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Studio} alt="Logo" />
            <p>IGSTUDIO</p>
        </div>
        <div className="mid">
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice</p>
            <p>About Us</p>
        </div>
        <div className="btn">
            <button>Contact Now</button>
        </div>
    </div>
  )
}

export default Navbar