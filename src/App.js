
import './App.scss';
import{Routes,Route, useLocation} from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/Home';
import About from './containers/About';
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Profolio from './containers/Profolio';
import Contact from './containers/Contact';
import Navbar from './component/navBar';
import particles from './utils.js/particles';

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) =>{
    await loadFull(main)
  }
  const renderParticleJsInHomePage =location.pathname ==="/";
  return (
    <div className="App">
    {/* partical js */}
    {
      renderParticleJsInHomePage &&
      < Particles id ="particles" options={particles} init ={handleInit}/>
    }
     
    {/* navbar */}
     <Navbar />
    {/* main page content */}
    <div className='App__main-page-content'>
     <Routes>
      <Route  index path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/porfolio" element={<Profolio />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
