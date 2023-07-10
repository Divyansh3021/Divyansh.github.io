import React from 'react'
import "./Styles/Experience.css"
import TechBtn from './TechBtn'

function Experience(props) {
  return (
    <div className='experience'>
        <div className="duration">{props.duration}</div>
        <div className="exp-content">
            <p className="position">{props.position}</p>
            <p className="role-brief">{props.role_brief}</p>

            <div className="techstack">
                {
                    props.stackList.map(function(stack){
                        return <TechBtn stack={stack}/>;
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Experience