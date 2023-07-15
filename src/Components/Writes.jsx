import React from 'react'

function Writes(props) {
  return (
    <div className='experience'>
        <a href={props.link} target="_blank" rel='noreferrer' style={{textDecoration: "none", display: "flex", flexDirection: "row"}}>
        <div className="duration"><img className='proj_img' src={props.img_src} alt="" /></div>
        <div className="exp-content">
            <p className="position">{props.title}</p>
        </div>
        </a>
    </div>
  )
}

export default Writes