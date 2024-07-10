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
        <Experience duration="Sep'23 - Oct'23" position="Natural Language Processing Intern . Smollan India" role_brief="Successfully completed the internship in which I extracted data from a database of 4000+ entries using natural language queries, presenting it in various formats like bar charts, histograms, and numerical values. Also Plotted data for more than 2000 regions on Geo Map using Tableau, Data Studio/Looker." stackList={["Natural Language Processing", "Data Visualization"]} />

        <Experience duration="June'23 - Sep'23" position="Machine Learning and Computing Vision Intern . Dazznix" role_brief=" Created an AI-based Exercise Judge by leveraging cutting-edge machine learning algorithms to assess and provide real-time feedback on a diverse range of 4 exercises, enhancing users’ workout experience." stackList={["Python","Computer Vision", "Mediapipe"]} />

        {/* <Experience duration="2022-Present" position="Event Management Lead" role_brief="Being a Event Management Lead, my work is to conduct event smoothly." stackList={["ReactJs","TailwindCSS", "MongoDB","MySQl"]} /> */}
        <Experience duration="June'22-Present" position="Backend Developer . University Software Development Cell" role_brief="Spearheaded the creation of a platform for sharing Research Papers, employing 4+ coding technologies to promote the culture of research. Administered a comprehensive database housing data for Faculty Feedback System for over 5000 students, encompassing valuable feedback and other pertinent information" stackList={["Team Management", "DBMS"]} />

        <div className="resume-link-con">
          <a href="https://drive.google.com/file/d/1VE632wJj3xP21p1QIT8qC1Ahwj-cyuHW/view?usp=sharing" rel="noreferrer" target="_blank" className="resume-link"><span>View full Résumé</span></a>
        </div>
    </div>
  )
}

export default Experiences