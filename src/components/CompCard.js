'use client';

export default function CompCard({ product, index }) {
  return (
    <article
      className={`comp-card reveal reveal-delay-${(index % 4) + 1}`}
      id={`comp-${product.id}`}
    >
      <div className="comp-card__icon">{product.icon}</div>
      <h3 className="comp-card__name">{product.name}</h3>
      <p className="comp-card__desc">{product.description}</p>
      <p className="comp-card__guarantee">{product.guarantee} de garantía</p>
    </article>
  );
}
