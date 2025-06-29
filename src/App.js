import { Helmet } from "react-helmet";
import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import About from './componnents/About';
import './index.css';
import Skills from './componnents/Skills';
import Contact from './componnents/contact';
function App() {
  return (
    <div>
      <Helmet>
         <title>Jihan Vall-Portfolio</title>
          <meta name="description" content="Portfolio of Jihan Vall - Software Engineer specialied in AI"/>
          <meta name="robots" content="index,follow"/>
          <meta name="author" content="Jihan Vall"/>
      </Helmet>
      <Navbar />
     <Home/>
     <About/>
     <Skills/>
     <Contact/>
    </div>
  );
}
export default App;

