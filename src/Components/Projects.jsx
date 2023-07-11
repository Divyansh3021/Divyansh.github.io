import React from 'react'
import Project from './Project'

function Projects() {
        function nav_change(){
            document.getElementById("projects").style.animation = "move-right 0.3s forwards ease";
        }

        function nav_return(){
            document.getElementById("projects").style.animation = "none";
        }
  return (

    <div onMouseEnter={nav_change} onMouseLeave = {nav_return}>
        <Project img_src="https://api.spellprints.com/media/apps/%40tsaveratto/ultimate-book-summarizer/cover_image.png" title="Book Summarizer" proj_brief="Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation." highlight="LLM Model" stackList={ ["python", "NLP", "LLM"]} />
        <Project img_src="https://api.spellprints.com/media/apps/%40tsaveratto/ultimate-book-summarizer/cover_image.png" title="Book Summarizer" proj_brief="Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation." highlight="LLM Model" stackList={ ["python", "NLP", "LLM"]} />
        <Project img_src="https://api.spellprints.com/media/apps/%40tsaveratto/ultimate-book-summarizer/cover_image.png" title="Book Summarizer" proj_brief="Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation." highlight="LLM Model" stackList={ ["python", "NLP", "LLM"]} />
        <Project img_src="https://api.spellprints.com/media/apps/%40tsaveratto/ultimate-book-summarizer/cover_image.png" title="Book Summarizer" proj_brief="Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation." highlight="LLM Model" stackList={ ["python", "NLP", "LLM"]} />
    </div>
  )
}

export default Projects