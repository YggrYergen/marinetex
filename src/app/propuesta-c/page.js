'use client';

import { useEffect, useState } from 'react';
import './theme-c.css';
import { fabricProducts, complementaryProducts } from '@/data/products';

export default function PropuestaC() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  return (
    <div className="theme-c">
      {/* ── Navbar ── */}
      <nav className={`nav-c ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-c__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Marine<em>Tex</em>
        </a>
        <ul className="nav-c__links">
          {['tejidos-c','productos-c','mc-c','contacto-c'].map((id, i) => (
            <li key={id}><a href={`#${id}`} className="nav-c__link" onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {['Tejidos','Productos','Confección','Contacto'][i]}
            </a></li>
          ))}
        </ul>
        <a href="https://wa.me/56987340625" target="_blank" rel="noopener noreferrer" className="nav-c__cta">Cotizar</a>
      </nav>

      {/* ── Hero (DARK split layout) ── */}
      <section className="hero-c">
        <div className="hero-c__bg" style={{ backgroundImage: 'url(/images/hero-c.png)' }} />
        <div className="hero-c__gradient" />
        <div className="hero-c__content">
          <div className="hero-c__left">
            <div className="hero-c__logo-ph">Logo</div>
            <h1 className="hero-c__title">Marine<em>Tex</em></h1>
            <p className="hero-c__sub">Outdoor Textile</p>
            <button className="hero-c__cta" onClick={() => document.getElementById('tejidos-c')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Colección
            </button>
          </div>
          <div className="hero-c__right">
            <span className="hero-c__quote-mark">&ldquo;</span>
            <p className="hero-c__quote">MarineTex®, marca líder en el mercado de textiles de alta calidad para aplicaciones exteriores y marinas, ofreciendo tejidos de una calidad excepcional, con fabricación 100% Europea, resistentes a climas extremos, con garantía de hasta 10 años.</p>
            <div className="hero-c__stats">
              <div><div className="hero-c__stat-num">10</div><div className="hero-c__stat-label">Años garantía</div></div>
              <div><div className="hero-c__stat-num">100%</div><div className="hero-c__stat-label">Europea</div></div>
              <div><div className="hero-c__stat-num">7</div><div className="hero-c__stat-label">Tejidos</div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="transition-strip" />

      {/* ── Tejidos (LIGHT) ── */}
      <section className="sec-c" id="tejidos-c">
        <div className="sec-c__container">
          <div className="reveal">
            <p className="sec-c__label">Colección MarineTex®</p>
            <h2 className="sec-c__title">Nuestros Tejidos</h2>
            <div className="divider-c" />
            <p className="sec-c__desc">Fabricación 100% Europea. Tejidos acrílicos tintados en masa con pigmentos integrados hasta el núcleo de la fibra.</p>
          </div>
          <div className="grid-c">
            {fabricProducts.map((p, i) => (
              <article key={p.id} className={`fc-c reveal reveal-delay-${(i%3)+1}`}>
                <div className="fc-c__img"><span>{p.name}</span><div className="fc-c__badge">{p.guarantee}</div></div>
                <div className="fc-c__body">
                  <h3 className="fc-c__name">{p.name}</h3>
                  <p className="fc-c__comp">{p.composition}</p>
                  <p className="fc-c__text">{p.description}</p>
                  <div className="fc-c__specs">
                    <div><span className="fc-c__sl">Ancho</span><br/><span className="fc-c__sv">{p.width}</span></div>
                    <div><span className="fc-c__sl">Peso</span><br/><span className="fc-c__sv">{p.weight}</span></div>
                    <div><span className="fc-c__sl">Acabado</span><br/><span className="fc-c__sv">{p.finish}</span></div>
                    <div><span className="fc-c__sl">Garantía</span><br/><span className="fc-c__sv">{p.guarantee}</span></div>
                  </div>
                  <div className="fc-c__tags">{p.qualities.slice(0,5).map(q => <span key={q} className="fc-c__tag">{q}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complementarios ── */}
      <section className="sec-c sec-c--alt" id="productos-c">
        <div className="sec-c__container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="sec-c__label" style={{ justifyContent: 'center' }}>Estándares de Calidad</p>
            <h2 className="sec-c__title">Productos Complementarios</h2>
            <div className="divider-c" style={{ margin: '24px auto' }} />
            <p className="sec-c__desc" style={{ margin: '0 auto' }}>MarineTex ha seleccionado cuidadosamente productos de excelente calidad que cumplen con los estándares de la marca.</p>
          </div>
          <div className="cg-c">
            {complementaryProducts.map((p, i) => (
              <article key={p.id} className={`cc-c reveal reveal-delay-${(i%4)+1}`}>
                <div className="cc-c__icon">{p.icon}</div>
                <h3 className="cc-c__name">{p.name}</h3>
                <p className="cc-c__desc">{p.description}</p>
                <p className="cc-c__g">{p.guarantee} de garantía</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marine Covers (DARK band) ── */}
      <section className="mc-c" id="mc-c">
        <div className="mc-c__inner">
          <div className="mc-c__text reveal">
            <p className="mc-c__label">Confección a Medida</p>
            <h2 className="mc-c__title">Marine Covers Chile</h2>
            <p className="mc-c__desc">MarineTex trabaja con Marine Covers Chile, empresa dedicada a la fabricación de productos textiles de exterior, especializada en su línea marina de producción a medida.</p>
            <a href="https://wa.me/56987340625?text=Hola%2C%20me%20interesa%20cotizar%20productos%20a%20medida" target="_blank" rel="noopener noreferrer" className="mc-c__cta">Cotizar a Medida <span>→</span></a>
          </div>
          <div className="mc-c__ph reveal reveal-delay-2">Marine Covers — Imagen</div>
        </div>
      </section>

      {/* ── Footer (LIGHT) ── */}
      <footer className="foot-c" id="contacto-c">
        <div className="foot-c__inner">
          <div>
            <p className="foot-c__brand">Marine<em>Tex</em></p>
            <p className="foot-c__sub">Outdoor Textile</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="foot-c__item"><a href="tel:+56987340625">+56 9 8734 0625</a></p>
            <p className="foot-c__item"><a href="https://www.marinecovers.cl" target="_blank" rel="noopener noreferrer">www.MarineCovers.cl</a></p>
          </div>
        </div>
        <p className="foot-c__copy">© 2026 MarineTex® — Outdoor Textile. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
