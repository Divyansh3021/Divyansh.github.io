import React from 'react'
import "./Styles/Social.css"

function Social() {
  return (
    <div className='social-links'>
        <div className="social-link"><img src={require("./Assets/linkedin.png")} alt="" className="social-link-icon" /></div>
        <div className="social-link"><img src={require("./Assets/insta.png")} alt="" className="social-link-icon" /></div>
        <div className="social-link"><img src={require("./Assets/github.png")} alt="" className="social-link-icon" /></div>
        <div className="social-link"><img src={require("./Assets/twitter.png")} alt="" className="social-link-icon" /></div>
    </div>
  )
}

export default Social