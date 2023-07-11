import React from 'react'
import TechBtn from './TechBtn';

function Project(props) {
  return (
    <div className='experience'>
        <div className="duration"><img className='proj_img' src={props.img_src} alt="" /></div>
        <div className="exp-content">
            <p className="position">{props.title}</p>
            <p className="role-brief">{props.proj_brief}</p>
            <p className='highlight'>{props.highlight}</p>
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

export default Project