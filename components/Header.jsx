"use client";
import { useState, useEffect } from 'react';
import AdroitIcon from './AdroitIcon';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleOpenModal = () => setModalOpen(true);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('openQuoteModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openQuoteModal', handleOpenModal);
    };
  }, []);

  return (
    <>
    <header style={{ boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.25)' : 'none' }}>
      <nav>
        <a href="https://www.adroitdesigns.in/" target="_blank" rel="noopener noreferrer" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AdroitIcon width={82} height={82} />
          <span style={{ textTransform: 'uppercase', color: 'white', letterSpacing: '3px', fontWeight: '600', fontSize: '1.25rem' }}>ADROIT DESIGN</span>
        </a>
        <div className="nav-cta">
          <button className="btn solid" onClick={() => setModalOpen(true)}>Get a Quote</button>
        </div>
      </nav>
    </header>
    <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
