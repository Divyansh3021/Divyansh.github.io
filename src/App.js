import './App.css';
import About from './Components/About'; 
import Experiences from './Components/Experiences';
import Hero from './Components/Hero';
// import SpotlightCursor from './Components/MouseSpotlight';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Social from './Components/Social';

function App() {

  // document.getElementById('projects').addEventListener("scroll", document.getElementById("projects").style.animation = "move-right 0.3s forwards ease")

  return (
    <div className="App">
    
      <div className="left-side">
        <Hero/>
        <Navbar/>
        <Social/>
      </div>

      <div className="right-side">
        <About/>
        <Experiences/>
        <Projects/>
      </div>
      {/* {SpotlightCursor(e)} */}
    </div>
  );
}

export default App;
