import './App.jsx';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact.jsx';
import Do from './Components/Do/Do'
import Skills from './Components/Skills/Skills.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Do/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
