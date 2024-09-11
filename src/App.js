import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
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
