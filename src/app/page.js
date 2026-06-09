import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FabricCard from '@/components/FabricCard';
import CompCard from '@/components/CompCard';
import ScrollAnimator from '@/components/ScrollAnimator';
import { fabricProducts, complementaryProducts } from '@/data/products';

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <Hero />

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 1: Tejidos MarineTex              */}
      {/* ══════════════════════════════════════════ */}
      <section className="section" id="tejidos">
        <div className="section__container">
          <div className="reveal">
            <p className="section__label">Colección MarineTex®</p>
            <h2 className="section__title">Nuestros Tejidos</h2>
            <div className="divider" />
            <p className="section__description">
              Fabricación 100% Europea. Tejidos acrílicos tintados en masa con pigmentos
              integrados hasta el núcleo de la fibra, garantizando estabilidad de color
              y resistencia excepcional ante las condiciones más extremas.
            </p>
          </div>

          <div className="products-grid">
            {fabricProducts.map((product, i) => (
              <FabricCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 2: Productos Complementarios      */}
      {/* ══════════════════════════════════════════ */}
      <section className="section" id="productos" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section__container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="section__label" style={{ justifyContent: 'center' }}>
              Estándares de Calidad
            </p>
            <h2 className="section__title">Productos Complementarios</h2>
            <div className="divider divider--center" />
            <p className="section__description" style={{ margin: '0 auto' }}>
              MarineTex ha seleccionado cuidadosamente productos de excelente calidad
              que cumplen con los estándares de la marca, integrándolos a su catálogo
              para ofrecer soluciones innovadoras y confiables a sus clientes.
            </p>
          </div>

          <div className="comp-grid">
            {complementaryProducts.map((product, i) => (
              <CompCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 3: Marine Covers                  */}
      {/* ══════════════════════════════════════════ */}
      <section className="section marine-covers" id="marine-covers">
        <div className="section__container">
          <div className="marine-covers__inner">
            <div className="marine-covers__text reveal">
              <p className="section__label">Confección a Medida</p>
              <h2 className="section__title">Marine Covers Chile</h2>
              <div className="divider" />
              <p className="section__description">
                MarineTex trabaja con Marine Covers Chile, empresa dedicada a la
                fabricación de productos textiles de exterior, especializada en su
                línea marina de producción a medida. Fundas, toldos, cojines y más,
                fabricados con los más altos estándares de calidad MarineTex.
              </p>
              <a
                href="https://wa.me/56987340625?text=Hola%2C%20me%20interesa%20cotizar%20productos%20a%20medida"
                target="_blank"
                rel="noopener noreferrer"
                className="marine-covers__cta"
              >
                Cotizar Producto a Medida
                <span className="marine-covers__cta-arrow">→</span>
              </a>
            </div>

            <div className="reveal reveal-delay-2" style={{
              flex: '0 0 380px',
              height: '320px',
              background: 'var(--bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--border-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {/* IMAGE PLACEHOLDER: Replace with <img src="/images/marine-covers-showcase.jpg" /> */}
              Marine Covers — Imagen
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* Footer                                    */}
      {/* ══════════════════════════════════════════ */}
      <footer className="footer" id="contacto">
        <div className="footer__inner">
          <div>
            {/* LOGO PLACEHOLDER: Replace with <img src="/logo/logo-full-light.png" alt="MarineTex" style={{ height: '36px' }} /> */}
            <p className="footer__brand-name">Marine<span>Tex</span></p>
            <p className="footer__brand-sub">Outdoor Textile</p>
          </div>

          <div className="footer__contact">
            <p className="footer__contact-item">
              <a href="tel:+56987340625">+56 9 8734 0625</a>
            </p>
            <p className="footer__contact-item">
              <a href="https://www.marinecovers.cl" target="_blank" rel="noopener noreferrer">
                www.MarineCovers.cl
              </a>
            </p>
          </div>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} MarineTex® — Outdoor Textile. Todos los derechos reservados.
        </p>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/56987340625"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.174 1.604 5.993L0 24l6.182-1.572A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.904 0-3.738-.514-5.336-1.487l-.383-.228-3.967 1.01 1.06-3.874-.25-.397A9.773 9.773 0 012.182 12C2.182 6.584 6.584 2.182 12 2.182S21.818 6.584 21.818 12 17.416 21.818 12 21.818z" />
        </svg>
      </a>
    </>
  );
}
