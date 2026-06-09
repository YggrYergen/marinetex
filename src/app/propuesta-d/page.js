'use client';

import { useEffect, useState } from 'react';
import './theme-d.css';
import { fabricProducts, complementaryProducts } from '@/data/products';

export default function PropuestaD() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  return (
    <div className="theme-d">
      {/* ── Navbar ── */}
      <nav className={`nd ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nd__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Marine<b>Tex</b>
        </a>
        <ul className="nd__links">
          {['td','pd','mcd-s','ctd'].map((id, i) => (
            <li key={id}><a href={`#${id}`} className="nd__link" onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {['Tejidos','Productos','Confección','Contacto'][i]}
            </a></li>
          ))}
        </ul>
        <a href="https://wa.me/56987340625" target="_blank" rel="noopener noreferrer" className="nd__cta">Cotizar</a>
      </nav>

      {/* ── Hero ── */}
      <section className="hd">
        <div className="hd__bg" style={{ backgroundImage: 'url(/images/hero-d.png)' }} />
        <div className="hd__fade" />
        <div className="hd__content">
          {/* LOGO PLACEHOLDER */}
          <p className="hd__eyebrow">Outdoor Textile</p>
          <h1 className="hd__title">
            Marine<b>Tex</b>
          </h1>
          <div className="hd__line" />
          <p className="hd__quote">
            Marca líder en textiles de alta calidad para aplicaciones exteriores y marinas.
            Fabricación 100% Europea, resistentes a climas extremos, con garantía de hasta 10 años.
          </p>
          <button className="hd__cta" onClick={() => document.getElementById('td')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar Colección
            <span className="hd__cta-line" />
          </button>
        </div>
      </section>

      {/* ── Tejidos ── */}
      <section className="sd" id="td">
        <div className="sd__c">
          <div className="rv">
            <p className="sd__eyebrow">Colección MarineTex®</p>
            <h2 className="sd__title">Nuestros Tejidos</h2>
            <div className="sd__line" />
            <p className="sd__desc">
              Tejidos acrílicos tintados en masa con pigmentos integrados hasta el núcleo de la fibra.
              Fabricación 100% Europea.
            </p>
          </div>
          <div className="gd">
            {fabricProducts.map((p, i) => (
              <article key={p.id} className={`fd rv rv-d${(i % 3) + 1}`}>
                <div className="fd__img">
                  <span>{p.name}</span>
                  <div className="fd__badge">{p.guarantee}</div>
                </div>
                <div className="fd__body">
                  <h3 className="fd__name">{p.name}</h3>
                  <p className="fd__comp">{p.composition}</p>
                  <p className="fd__text">{p.description}</p>
                  <div className="fd__specs">
                    <div><span className="fd__sl">Ancho</span><div className="fd__sv">{p.width}</div></div>
                    <div><span className="fd__sl">Peso</span><div className="fd__sv">{p.weight}</div></div>
                    <div><span className="fd__sl">Acabado</span><div className="fd__sv">{p.finish}</div></div>
                    <div><span className="fd__sl">Garantía</span><div className="fd__sv">{p.guarantee}</div></div>
                  </div>
                  <div className="fd__tags">
                    {p.qualities.slice(0, 5).map(q => <span key={q} className="fd__tag">{q}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complementarios ── */}
      <section className="sd sd--alt" id="pd">
        <div className="sd__c">
          <div className="rv" style={{ textAlign: 'center' }}>
            <p className="sd__eyebrow">Estándares de Calidad</p>
            <h2 className="sd__title">Productos Complementarios</h2>
            <div className="sd__line" style={{ margin: '24px auto' }} />
            <p className="sd__desc" style={{ margin: '0 auto' }}>
              Productos seleccionados cuidadosamente que cumplen con los estándares de la marca.
            </p>
          </div>
          <div className="cgd">
            {complementaryProducts.map((p, i) => (
              <article key={p.id} className={`cd rv rv-d${(i % 4) + 1}`}>
                <div className="cd__icon">{p.icon}</div>
                <h3 className="cd__name">{p.name}</h3>
                <p className="cd__desc">{p.description}</p>
                <p className="cd__g">{p.guarantee} de garantía</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marine Covers ── */}
      <section className="mcd" id="mcd-s">
        <div className="mcd__inner">
          <div className="rv">
            <p className="mcd__label">Confección a Medida</p>
            <h2 className="mcd__title">Marine Covers Chile</h2>
            <p className="mcd__desc">
              Empresa dedicada a la fabricación de productos textiles de exterior,
              especializada en su línea marina de producción a medida.
            </p>
            <a href="https://wa.me/56987340625?text=Hola%2C%20me%20interesa%20cotizar%20productos%20a%20medida" target="_blank" rel="noopener noreferrer" className="mcd__cta">
              Cotizar a Medida
            </a>
          </div>
          <div className="mcd__ph rv rv-d2">Marine Covers — Imagen</div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ftd" id="ctd">
        <div className="ftd__inner">
          <div>
            <p className="ftd__brand">Marine<b>Tex</b></p>
            <p className="ftd__sub">Outdoor Textile</p>
          </div>
          <div className="ftd__contact">
            <p className="ftd__item"><a href="tel:+56987340625">+56 9 8734 0625</a></p>
            <p className="ftd__item"><a href="https://www.marinecovers.cl" target="_blank" rel="noopener noreferrer">www.MarineCovers.cl</a></p>
          </div>
        </div>
        <p className="ftd__copy">© 2026 MarineTex® — Outdoor Textile. Todos los derechos reservados.</p>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/56987340625" target="_blank" rel="noopener noreferrer" className="wad" aria-label="WhatsApp">💬</a>
    </div>
  );
}
