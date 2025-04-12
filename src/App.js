import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';


import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import ProtFolio from './containers/PortFolio';
import Contact from './containers/Contact';
import Navbar from './component/navBar';


function App() {
  const location = useLocation();
  const handleInit = async (engine) => {
    await loadFull(engine);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* ✅ Particle background only on homepage */}
      {renderParticleJsInHomePage && (
        <Particles id="tsparticles" options={particles} init={handleInit} />
      )}

      {/* Navigation bar */}
      <Navbar />

      {/* Page content */}
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
