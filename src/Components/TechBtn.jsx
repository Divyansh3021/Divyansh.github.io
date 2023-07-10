import React from 'react'
import "./Styles/Experience.css"

function TechBtn(props) {
  return (
    <div className='btn'>
        {props.stack}
    </div>
  )
}

export default TechBtn