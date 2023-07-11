import React from 'react'
import Project from './Project'
import devfeed from "./Assets/devfeed.png"
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

    <div onMouseEnter={nav_change} onMouseLeave = {nav_return}>
        <Project img_src={devfeed} link="https://devfeed101.netlify.app/" title="Devfeed" proj_brief="Devfeed is a dynamic website that efficiently sends newsletters to subscribers, keeping them informed about upcoming events in the tech industry. The platform enhances engagement and fosters a vibrant community." highlight="100+ opensource contributors" stackList={ ["ReactJs", "MySQL"]} />
        <Project img_src={sign_lang} link="https://github.com/Divyansh3021/Sign-Language-Converter" title="Sign Language Interpreter" proj_brief="My Sign Language Converter project utilizes Python, TensorFlow object detection, and OpenCV to accurately interpret and convert sign language gestures into text or speech, aiding communication for the hearing-impaired." highlight="Object Detection" stackList={ ["TFOD", "OpenCV", "CNN"]} />
        <Project img_src={sports_judge} link="https://github.com/Divyansh3021/AI_sports_judge" title="AI Sports Judge" proj_brief="As part of my internship project, I developed an AI sports judge using Mediapipe. This innovative solution leverages computer vision to accurately assess and score sports performances, enhancing objectivity and efficiency in judging." highlight="Mediapipe, YOLO" stackList={ ["Python", "Flask", "Tensorflow"]} />
        <Project img_src={code_story} link="https://github.com/Divyansh3021/The-Code-Story" title="The Code Story" proj_brief="The Code Story is an educational game that combines gaming and learning. Players engage in interactive challenges that promote coding skills and foster a fun and engaging environment for acquiring programming knowledge." highlight="Web game" stackList={ ["Javascript", "8-bit game"]} />
    </div>
  )
}

export default Projects