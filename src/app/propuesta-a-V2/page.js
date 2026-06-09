'use client';

import { useEffect, useState } from 'react';
import './theme-a-V2.css';
import { fabricProducts, complementaryProducts } from '@/data/products';

const heroImages = [
  '/images/hero-v2-1.png',
  '/images/hero-v2-2.png',
  '/images/hero-v2-3.png',
];

export default function PropuestaAV2() {
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Scroll listener for nav
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Reveal animation observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Hero image carousel interval (5 seconds)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="theme-a-v2">
      {/* ── Navbar ── */}
      <nav className={`nav-a ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-a__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Marine<em>Tex</em>
        </a>
        <ul className="nav-a__links">
          {['tejidos-a','productos-a','mc-a','contacto-a'].map((id, i) => (
            <li key={id}>
              <a href={`#${id}`} className="nav-a__link" onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {['Tejidos','Productos','Confección','Contacto'][i]}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/56987340625" target="_blank" rel="noopener noreferrer" className="nav-a__cta">Cotizar</a>
      </nav>

      {/* ── Hero with Images Slideshow ── */}
      <section className="hero-a">
        <div className="hero-a__bg-container">
          {heroImages.map((img, idx) => (
            <div
              key={img}
              className={`hero-a__bg ${idx === currentImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-a__overlay" />
        <div className="hero-a__content">
          <div className="hero-a__logo-ph" style={{ padding: '0', overflow: 'hidden' }}>
            <img src="/images/logo.png" alt="MarineTex Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 className="hero-a__title">Marine<em>Tex</em></h1>
          <p className="hero-a__sub">Textiles Náuticos & Exterior de Alto Rendimiento</p>
          
          <div className="hero-a__quote">
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--accent-gold-light)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 400,
              marginBottom: '16px',
              letterSpacing: '0.05em'
            }}>
              Fibra que Protege tu Embarcación y Mobiliario
            </h2>
            <p>
              Fabricados textiles premium para resistir la salinidad extrema, rayos UV y humedad severa. 
              Diseñados para la confección de fundas de embarcaciones, toldos náuticos y tapicería de terraza de alta gama.
            </p>
          </div>

          {/* Floating Application Badges */}
          <div className="hero-a__badges">
            <div className="hero-a__badge-item"><em>⛵</em> Protección Marina</div>
            <div className="hero-a__badge-item"><em>☀️</em> Protección Solar</div>
            <div className="hero-a__badge-item"><em>🛋️</em> Tapicería de Lujo</div>
            <div className="hero-a__badge-item"><em>♻️</em> Confección Zero-Waste</div>
          </div>

          <button className="hero-a__cta" onClick={() => document.getElementById('tejidos-a')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Catálogo Técnico
          </button>
        </div>
      </section>

      {/* ── Tejidos ── */}
      <section className="sec-a" id="tejidos-a">
        <div className="sec-a__container">
          <div className="reveal">
            <p className="sec-a__label">Colección MarineTex®</p>
            <h2 className="sec-a__title">Nuestros Tejidos</h2>
            <div className="divider-a" />
            <p className="sec-a__desc">Fabricación 100% Europea. Tejidos acrílicos tintados en masa con pigmentos integrados hasta el núcleo de la fibra.</p>
          </div>
          <div className="grid-a">
            {fabricProducts.map((p, i) => (
              <article key={p.id} className={`fcard-a reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="fcard-a__img">
                  {p.image ? (
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <span>{p.name}</span>
                  )}
                  <div className="fcard-a__badge">{p.guarantee}</div>
                </div>
                <div className="fcard-a__body">
                  <h3 className="fcard-a__name">{p.name}</h3>
                  <p className="fcard-a__comp">{p.composition}</p>
                  <p className="fcard-a__text">{p.description}</p>
                  <div className="fcard-a__specs">
                    <div><span className="fcard-a__sl">Ancho</span><br/><span className="fcard-a__sv">{p.width}</span></div>
                    <div><span className="fcard-a__sl">Peso</span><br/><span className="fcard-a__sv">{p.weight}</span></div>
                    <div><span className="fcard-a__sl">Acabado</span><br/><span className="fcard-a__sv">{p.finish}</span></div>
                    <div><span className="fcard-a__sl">Garantía</span><br/><span className="fcard-a__sv">{p.guarantee}</span></div>
                  </div>
                  <div className="fcard-a__tags">
                    {p.qualities.slice(0, 5).map(q => <span key={q} className="fcard-a__tag">{q}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complementarios ── */}
      <section className="sec-a sec-a--alt" id="productos-a">
        <div className="sec-a__container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="sec-a__label" style={{ justifyContent: 'center' }}>Estándares de Calidad</p>
            <h2 className="sec-a__title">Productos Complementarios</h2>
            <div className="divider-a" style={{ margin: '28px auto' }} />
            <p className="sec-a__desc" style={{ margin: '0 auto' }}>MarineTex ha seleccionado cuidadosamente productos de excelente calidad que cumplen con los estándares de la marca.</p>
          </div>
          <div className="cgrid-a">
            {complementaryProducts.map((p, i) => (
              <article key={p.id} className={`ccard-a reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="ccard-a__icon" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    p.icon
                  )}
                </div>
                <h3 className="ccard-a__name">{p.name}</h3>
                <p className="ccard-a__desc">{p.description}</p>
                <p className="ccard-a__g">{p.guarantee} de duración</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ciclo Circular ── */}
      <section className="sec-a sec-a--circular" id="circular-a">
        <div className="sec-a__container">
          <div className="reveal circular-a__layout">
            <div className="circular-a__text">
              <p className="sec-a__label">Sustentabilidad Activa</p>
              <h2 className="sec-a__title">Diseño con Propósito: Nuestro Ciclo Circular</h2>
              <div className="divider-a" />
              <p className="sec-a__desc" style={{ marginBottom: '24px' }}>
                En alianza con Marine Covers Chile, transformamos el descarte en valor. Los retazos de confección técnica y las cubiertas antiguas retiradas entran en nuestro programa de retorno circular.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '20px' }}>
                En lugar de terminar en vertederos, este material ultra resistente es clasificado, limpiado y confeccionado nuevamente para crear accesorios de alta durabilidad como organizadores de cabina, bolsos utilitarios de herramientas náuticas y estuches estancos.
              </p>
              <div style={{
                marginTop: '28px',
                padding: '18px 22px',
                background: 'rgba(184, 154, 61, 0.06)',
                borderLeft: '3px solid var(--accent-gold)',
                borderRadius: '0 8px 8px 0',
                textAlign: 'left'
              }}>
                <strong style={{ display: 'block', color: 'var(--accent-navy)', fontSize: '0.95rem', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>
                  🇨🇱 Compromiso 1% Ecológico Litoral
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.6', margin: 0 }}>
                  Estamos comprometidos de forma activa con el medio ambiente. Donamos el <strong>1% de nuestros ingresos totales</strong> a iniciativas ecológicas en Chile dedicadas a la limpieza de playas y la conservación de ecosistemas marinos.
                </p>
              </div>
            </div>
            <div className="circular-a__visual">
              <div className="circular-a__badge-eco">
                <span className="circular-a__eco-icon">♻️</span>
                <div>
                  <strong>Programa Retorno Circular</strong>
                  <p>Reutilización activa de descartes textiles de alta resistencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marine Covers ── */}
      <section className="mc-a" id="mc-a">
        <div className="mc-a__inner">
          <div className="mc-a__text reveal">
            <p className="mc-a__label">Confección a Medida</p>
            <h2 className="mc-a__title">Marine Covers Chile</h2>
            <p className="mc-a__desc">MarineTex trabaja con Marine Covers Chile, empresa dedicada a la fabricación de productos textiles de exterior, especializada en su línea marina de producción a medida.</p>
            <a href="https://wa.me/56987340625?text=Hola%2C%20me%20interesa%20cotizar%20productos%20a%20medida" target="_blank" rel="noopener noreferrer" className="mc-a__cta">
              Cotizar Producto a Medida <span>→</span>
            </a>
          </div>
          <div className="mc-a__ph reveal reveal-delay-2" style={{ padding: '0', overflow: 'hidden' }}>
            <img src="/images/marine-covers-footer.png" alt="Marine Covers Chile" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="foot-a" id="contacto-a">
        <div className="foot-a__inner">
          <div>
            <p className="foot-a__brand">Marine<em>Tex</em></p>
            <p className="foot-a__sub">Outdoor Textile</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="foot-a__item"><a href="tel:+56987340625">+56 9 8734 0625</a></p>
            <p className="foot-a__item"><a href="https://www.marinecovers.cl" target="_blank" rel="noopener noreferrer">www.MarineCovers.cl</a></p>
          </div>
        </div>
        <p className="foot-a__copy">© 2026 MarineTex® — Outdoor Textile. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
