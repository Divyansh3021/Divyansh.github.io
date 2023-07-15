import React from 'react'
import "./Styles/Navbar.css"

function Navbar() {
  return (
    <div className='nav-list'>
        <div className="nav-item" id='about'>About</div>
        <div className="nav-item" id='experience'>Experience</div>
        <div className="nav-item" id='projects'>Projects</div>
        <div className="nav-item" id='writing'>Writing</div>
    </div>
  )
}

export default Navbar