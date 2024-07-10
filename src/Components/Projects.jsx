import React from 'react'
import Project from './Project'
import glpyh from "./Assets/glyph.png"
import sign_lang from "./Assets/sign-lang-conv.png"
import sports_judge from "./Assets/sports-judge.png"
import code_story from "./Assets/code_story.png"

function Projects() {
        function nav_change(){
            document.getElementById("projects").style.animation = "move-right 0.3s forwards ease";
        }

        function nav_return(){
            document.getElementById("projects").style.animation = "none";
        }
  return (

    <div onMouseEnter={nav_change} onMouseLeave = {nav_return} className="projects-con">
      <h3 className="title">Projects</h3>
        <Project img_src={glpyh} link="https://theglyph.vercel.app/" title="Devfeed" proj_brief=" VS Code extension that effortlessly fetches and integrates past code, boosting productivity and streamlining your workflow. Boosted developer productivity by 40% by eliminating redundant coding tasks with Glyph’s intelligent features." stackList={ ["Langchain", "VectorDB", "Docker", "Javascript", "API", "NextJS"]} />

        <Project link="https://github.com/Divyansh3021/nile" title="Nile" proj_brief="Developed a program named Nile that let’s you ask question about the code in a Github repository with the help of cutting edge technology achieving accuracy up to 90%." stackList={ ["Large Language Models", "RAG", "Vector Databases"]} />

        <Project link="https://doc-summarizer.streamlit.app/" title="Book Summarization" proj_brief="Developed a Book Summarization project using T5 Transformers, achieving an impressive accuracy rate of 90%. Designed and implemented a Python tool for efficient and concise summarization, reducing reading time for users." stackList={ ["Transformers","Streamlit"]} />

        <Project img_src={code_story} link="https://github.com/Divyansh3021/The-Code-Story" title="The Code Story" proj_brief="The Code Story is an educational game that combines gaming and learning. Players engage in interactive challenges that promote coding skills and foster a fun and engaging environment for acquiring programming knowledge." highlight="Web game" stackList={ ["Javascript", "8-bit game"]} />
    </div>
  )
}

export default Projects