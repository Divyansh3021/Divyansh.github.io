import React from 'react'
import "./Styles/About.css"

function About() {

  function nav_change(){
    document.getElementById("about").style.animation = "move-right 0.3s forwards ease";
  }

  function nav_return(){
      document.getElementById("about").style.animation = "none";
  }
  return (
    <div className='about-con' onMouse onMouseOver={nav_change} onMouseLeave = {nav_return}>
        <p>
        Back in 2019, when I started my first coding language Python. Fast forward to today, I am digging deep in the domain of Artificial Intelligence, also I am MERN stack developer.
        </p>
        <br />
        <p>
        These days, I am focusing on building products, starting ventures and investing in myself.
        </p>
        <br />

        <p>
        When I’m not at the computer, I find myself playing guitar, listening songs or diving in the never ending realm of Cosmos.
        </p>
            
    </div>
  )
}

export default About