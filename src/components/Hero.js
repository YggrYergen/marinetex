'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let animFrame;
    const handleScroll = () => {
      animFrame = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const scrollY = window.scrollY;
        const content = heroRef.current.querySelector('.hero__content');
        const bgImage = heroRef.current.querySelector('.hero__bg-image');
        if (content) {
          content.style.transform = `translateY(${scrollY * 0.25}px)`;
          content.style.opacity = Math.max(0, 1 - scrollY / 700);
        }
        if (bgImage) {
          bgImage.style.transform = `translateY(${scrollY * 0.15}px) scale(1.1)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const scrollToTejidos = () => {
    const el = document.getElementById('tejidos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero__bg">
        {/* IMAGE PLACEHOLDER: Replace with background-image url to /images/hero-bg.jpg (nautical/ocean scene) */}
        <div className="hero__bg-image" style={{ backgroundColor: 'var(--bg-secondary)' }} />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-lines" />
        <div className="hero__vignette" />
      </div>

      <div className="hero__content">
        {/* LOGO PLACEHOLDER: Replace <div> with <img src="/logo/logo-full-light.png" alt="MarineTex" style={{ width: '120px', height: 'auto' }} /> */}
        <div className="hero__logo-placeholder">Logo</div>

        <h1 className="hero__brand">
          Marine<span>Tex</span>
        </h1>
        <p className="hero__subtitle">Outdoor Textile</p>

        <div className="hero__quote">
          <span className="hero__quote-mark">&ldquo;</span>
          <p>
            MarineTex®, marca líder en el mercado de textiles de alta calidad
            para aplicaciones exteriores y marinas, ofreciendo tejidos de una
            calidad excepcional, con fabricación 100% Europea, resistentes a
            climas extremos, con garantía de hasta 10 años.
          </p>
        </div>

        <button className="hero__scroll" onClick={scrollToTejidos} aria-label="Explorar colección">
          <span>Explorar</span>
          <div className="hero__scroll-line" />
        </button>
      </div>
    </section>
  );
}
