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
    <div onMouseEnter={nav_change} onMouseLeave = {nav_return}>
        <Experience duration="2021-Present" position="Vice-Chair" role_brief="My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API." stackList={["ReactJs","TailwindCSS", "MongoDB","MySQl"]} />
        <Experience duration="2021-Present" position="Vice-Chair" role_brief="My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API." stackList={["ReactJs","TailwindCSS", "MongoDB","MySQl"]} />
        <Experience duration="2021-Present" position="Vice-Chair" role_brief="My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API." stackList={["ReactJs","TailwindCSS", "MongoDB","MySQl"]} />
        <Experience duration="2021-Present" position="Vice-Chair" role_brief="My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API." stackList={["ReactJs","TailwindCSS", "MongoDB","MySQl"]} />

        <div className="resume-link-con">
          <a href="/" target="_blank" className="resume-link"><span>View full Résumé</span></a>
        </div>
    </div>
  )
}

export default Experiences