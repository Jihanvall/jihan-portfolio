import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import About from './componnents/About';
import './index.css';
import Skills from './componnents/Skills';
import Contact from './componnents/contact';


function App() {
  return (
    <div>
      <Navbar />
     <Home/>
     <About/>
     <Skills/>
     <Contact/>
    </div>
  );
}
export default App;

