'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        {/* LOGO PLACEHOLDER: Replace with <img src="/logo/logo-icon.svg" alt="MarineTex" /> */}
        <div className="navbar__logo-icon">M</div>
        <div className="navbar__logo-text">
          Marine<span>Tex</span>
        </div>
      </a>

      <ul className="navbar__links">
        <li><a href="#tejidos" className="navbar__link" onClick={(e) => { e.preventDefault(); scrollTo('tejidos'); }}>Tejidos</a></li>
        <li><a href="#productos" className="navbar__link" onClick={(e) => { e.preventDefault(); scrollTo('productos'); }}>Productos</a></li>
        <li><a href="#marine-covers" className="navbar__link" onClick={(e) => { e.preventDefault(); scrollTo('marine-covers'); }}>Confección</a></li>
        <li><a href="#contacto" className="navbar__link" onClick={(e) => { e.preventDefault(); scrollTo('contacto'); }}>Contacto</a></li>
      </ul>

      <a
        href="https://wa.me/56987340625"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__cta"
      >
        Cotizar
      </a>
    </nav>
  );
}
