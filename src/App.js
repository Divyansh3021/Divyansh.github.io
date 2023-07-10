import './App.css';
import About from './Components/About';
import Experiences from './Components/Experiences';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Social from './Components/Social';

function App() {
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
      </div>
    </div>
  );
}

export default App;
