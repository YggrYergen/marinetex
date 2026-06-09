'use client';

import { useEffect, useState } from 'react';
import './theme-a.css';
import { fabricProducts, complementaryProducts } from '@/data/products';

export default function PropuestaA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Reveal animations
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  return (
    <div className="theme-a">
      {/* ── Navbar ── */}
      <nav className={`nav-a ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-a__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Marine<em>Tex</em>
        </a>
        <ul className="nav-a__links">
          {['tejidos-a','productos-a','mc-a','contacto-a'].map((id, i) => (
            <li key={id}><a href={`#${id}`} className="nav-a__link" onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {['Tejidos','Productos','Confección','Contacto'][i]}
            </a></li>
          ))}
        </ul>
        <a href="https://wa.me/56987340625" target="_blank" rel="noopener noreferrer" className="nav-a__cta">Cotizar</a>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-a">
        <div className="hero-a__bg" style={{ backgroundImage: 'url(/images/hero-a.png)' }} />
        <div className="hero-a__overlay" />
        <div className="hero-a__content">
          <div className="hero-a__logo-ph" style={{ padding: '0', overflow: 'hidden' }}>
            <img src="/images/logo.png" alt="MarineTex Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 className="hero-a__title">Marine<em>Tex</em></h1>
          <p className="hero-a__sub">Outdoor Textile</p>
          <div className="hero-a__quote">
            <p>MarineTex®, marca líder en el mercado de textiles de alta calidad para aplicaciones exteriores y marinas, ofreciendo tejidos de una calidad excepcional, con fabricación 100% Europea, resistentes a climas extremos, con garantía de hasta 10 años.</p>
          </div>
          <button className="hero-a__cta" onClick={() => document.getElementById('tejidos-a')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Colección
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
                <div className="ccard-a__icon">{p.icon}</div>
                <h3 className="ccard-a__name">{p.name}</h3>
                <p className="ccard-a__desc">{p.description}</p>
                <p className="ccard-a__g">{p.guarantee} de garantía</p>
              </article>
            ))}
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
          <div className="mc-a__ph reveal reveal-delay-2">Marine Covers — Imagen</div>
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
