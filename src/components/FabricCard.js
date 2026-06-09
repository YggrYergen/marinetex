'use client';

export default function FabricCard({ product, index }) {
  return (
    <article
      className={`fabric-card reveal reveal-delay-${(index % 3) + 1}`}
      id={`fabric-${product.id}`}
    >
      <div className="fabric-card__image">
        {/* IMAGE PLACEHOLDER: Replace with <img src={product.image} alt={product.name} /> */}
        <span>{product.name} — Imagen de tela</span>
        <div className="fabric-card__guarantee">{product.guarantee}</div>
      </div>

      <div className="fabric-card__body">
        <h3 className="fabric-card__name">{product.name}</h3>
        <p className="fabric-card__composition">{product.composition}</p>
        <p className="fabric-card__description">{product.description}</p>

        <div className="fabric-card__specs">
          <div className="fabric-card__spec">
            <span className="fabric-card__spec-label">Ancho</span>
            <span className="fabric-card__spec-value">{product.width}</span>
          </div>
          <div className="fabric-card__spec">
            <span className="fabric-card__spec-label">Peso</span>
            <span className="fabric-card__spec-value">{product.weight}</span>
          </div>
          <div className="fabric-card__spec">
            <span className="fabric-card__spec-label">Acabado</span>
            <span className="fabric-card__spec-value">{product.finish}</span>
          </div>
          <div className="fabric-card__spec">
            <span className="fabric-card__spec-label">Garantía</span>
            <span className="fabric-card__spec-value">{product.guarantee}</span>
          </div>
        </div>

        <div className="fabric-card__qualities">
          {product.qualities.slice(0, 6).map((q) => (
            <span key={q} className="fabric-card__quality">{q}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
