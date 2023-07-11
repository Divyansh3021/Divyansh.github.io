import React from 'react'
import "./Styles/Social.css"

function Social() {
  return (
    <div className='social-links'>
        <div className="social-link"><a href="https://www.linkedin.com/in/divyansh04/" target="_blank" rel='noreferrer'><img src={require("./Assets/linkedin.png")} alt="" className="social-link-icon" /></a></div>
        <div className="social-link"><a href="https://www.instagram.com/divyan_shhh/" target="_blank" rel='noreferrer'><img src={require("./Assets/insta.png")} alt="" className="social-link-icon" /></a></div>
        <div className="social-link"><a href="https://github.com/Divyansh3021" target="_blank" rel='noreferrer'><img src={require("./Assets/github.png")} alt="" className="social-link-icon" /></a></div>
        <div className="social-link"><a href="https://twitter.com/Divyans95234996" target="_blank" rel='noreferrer'><img src={require("./Assets/twitter.png")} alt="" className="social-link-icon" /></a></div>
    </div>
  )
}

export default Social