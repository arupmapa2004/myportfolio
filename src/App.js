import { useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <Navbar/>
      <Home/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
