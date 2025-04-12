import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from '@tsparticles/react'; // ✅ updated to v3 package
import { loadFull } from '@tsparticles/engine'; // ✅ engine loader for tsparticles v3

import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import ProtFolio from './containers/PortFolio';
import Contact from './containers/Contact';
import Navbar from './component/navBar';
import particles from './utils.js/particles'; // ✅ your custom particle config

function App() {
  const location = useLocation();
  console.log(location);

  // Init for tsparticles v3 engine
  const handleInit = async (engine) => {
    await loadFull(engine);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Background particles only on home page */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* Navigation bar */}
      <Navbar />

      {/* Page content based on route */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/protfolio" element={<ProtFolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
