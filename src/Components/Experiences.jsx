import React from 'react'
import Experience from './Experience'

function Experiences() {

  function nav_change(){
    document.getElementById("experience").style.animation = "move-right 0.3s forwards ease";
}

function nav_return(){
    document.getElementById("experience").style.animation = "none";
}

  return (
    <div onMouseEnter={nav_change} onMouseLeave = {nav_return} className="experience-con">
      <h3 className='title'>Experiences</h3>
        <Experience duration="2023-Present" position="Vice-Chair . Software Development Cell" role_brief="As Vice-Chair at the Software Development Cell, I am successfully leading a team of talented individuals to drive innovative software solutions." stackList={["Team Management"]} />

        <Experience duration="2022-Present" position="Lead Developer . Software Development Cell" role_brief="As the Lead Developer at the Software Development Cell, I oversee a team that has delivered multiple industry-level websites and feedback systems, driving efficiency and customer satisfaction." stackList={["Python","ReactJs", "MongoDB","MySQl","NodeJs"]} />

        {/* <Experience duration="2022-Present" position="Event Management Lead" role_brief="Being a Event Management Lead, my work is to conduct event smoothly." stackList={["ReactJs","TailwindCSS", "MongoDB","MySQl"]} /> */}
        <a href="https://techspace-ggsipu.tech/#/" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><Experience duration="2022-Present" position="Full Stack Developer . Techspace" role_brief="As a Fullstack Developer at Techspace, GGSIPU, I am responsible for designing and implementing robust web applications, leveraging my skills in both front-end and back-end development." stackList={["ReactJs","Bootstrap"]} /></a>

        <a href="https://infoxpression.tech/" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><Experience duration="2022" position="Website Developer . Infoxpression" role_brief="In my role as a Website Developer at Infoxpression, I utilize my expertise to create visually appealing and user-friendly websites, ensuring seamless functionality and optimal user experience." stackList={["ReactJs","TailwindCSS", "MongoDB", "NodeJs"]} /></a>

        <div className="resume-link-con">
          <a href="https://drive.google.com/file/d/1DwVjzEiHM87_Kl2_5jA5fwuwuBstYbiD/view?usp=sharing" rel="noreferrer" target="_blank" className="resume-link"><span>View full Résumé</span></a>
        </div>
    </div>
  )
}

export default Experiences