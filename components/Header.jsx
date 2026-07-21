"use client";
import { useState, useEffect } from 'react';
import AdroitIcon from './AdroitIcon';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.25)' : 'none' }}>
      <nav>
        <a href="https://www.adroitdesigns.in/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AdroitIcon width={82} height={82} />
          <span style={{ textTransform: 'uppercase', color: 'white', letterSpacing: '3px', fontWeight: '600', fontSize: '1.25rem' }}>ADROIT DESIGN</span>
        </a>
        <div
          className="nav-links"
          style={menuOpen ? {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '64px',
            left: '0',
            right: '0',
            background: 'rgba(18,22,26,0.98)',
            padding: '20px 32px',
            gap: '18px'
          } : {}}
        >
          <a href="#intro" onClick={() => setMenuOpen(false)}>Intro</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Adroit</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>
        <div className="nav-cta">
          <a href="tel:+919000000000" className="btn small">📞 +91 90000 00000</a>
          <a href="#contact" className="btn solid">Get a Quote</a>
          <button className="menu-btn" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
