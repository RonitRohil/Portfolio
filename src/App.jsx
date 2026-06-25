import { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import IncidentLog from './components/IncidentLog';
import Skills from './components/Skills';
import DomainExpertise from './components/DomainExpertise';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Divider() {
  return <div style={{ borderTop: '1px solid var(--border)', maxWidth: '1120px', margin: '0 auto' }} />;
}

export default function App() {
  const [booted, setBooted]           = useState(false);
  const [showBoot, setShowBoot]       = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const handleBootComplete = () => {
    setBooted(true);
    setTimeout(() => setShowBoot(false), 650);
  };

  useEffect(() => {
    document.body.style.overflow = (!booted || paletteOpen) ? 'hidden' : 'auto';
    document.body.classList.add('scanlines');
  }, [booted, paletteOpen]);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-bar');
    if (!bar) return;
    const handler = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      bar.style.width = (p * 100) + '%';
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (booted) setPaletteOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [booted]);

  return (
    <>
      {/* Scroll progress */}
      <div id="scroll-bar" style={{ position: 'fixed', top: 0, left: 0, height: '2px', width: '0%', background: 'var(--green)', zIndex: 200, boxShadow: '0 0 10px var(--green-glow)', transition: 'width 0.1s linear' }} />

      {/* Boot overlay */}
      {showBoot && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: booted ? 0 : 1, transition: 'opacity 0.6s ease',
          pointerEvents: booted ? 'none' : 'auto',
        }}>
          <BootSequence onComplete={handleBootComplete} />
        </div>
      )}

      {/* Command palette */}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {/* Main content */}
      <div style={{ opacity: booted ? 1 : 0, transition: 'opacity 0.5s ease 0.2s', position: 'relative', zIndex: 1 }}>
        <Navbar visible={booted} onOpenPalette={() => setPaletteOpen(true)} />
        <main>
          <Hero visible={booted} />
          <Divider /><About />
          <Divider /><Experience />
          <Divider /><IncidentLog />
          <Divider /><Skills />
          <Divider /><DomainExpertise />
          <Divider /><Projects />
          <Divider /><OpenSource />
          <Divider /><Contact />
        </main>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
