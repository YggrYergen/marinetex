import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#070b14',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      color: '#eef1f6',
      padding: '40px',
      gap: '48px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 500,
          marginBottom: '12px',
        }}>
          Marine<span style={{ color: '#c9a84c' }}>Tex</span>
        </h1>
        <p style={{
          fontSize: '0.7rem',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: '#7b8ca1',
        }}>
          Propuestas de Diseño Web
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {[
          { href: '/propuesta-a', label: 'A', title: 'Warm Nautical Luxe', desc: 'Fondo crema/beige, acentos navy, tipografía serif clásica. Estilo catálogo de lujo náutico.', color: '#d4a855' },
          { href: '/propuesta-b', label: 'B', title: 'Dark Premium Marine', desc: 'Navy oscuro, acentos dorados, glassmorphism. Estilo moderno y tecnológico premium.', color: '#4a7cc9' },
          { href: '/propuesta-c', label: 'C', title: 'Hybrid Elegant', desc: 'Hero oscuro que transiciona a secciones claras. Lo mejor de ambos mundos.', color: '#8b6cc9' },
          { href: '/propuesta-d', label: 'D', title: 'Monochrome Premium', desc: 'Negro y blanco puro. Editorial, minimalista, máximo lujo. Estilo casa de moda de alta costura.', color: '#ffffff' },
        ].map((p) => (
          <Link key={p.href} href={p.href} style={{
            background: '#111a2e',
            border: '1px solid rgba(136,153,170,0.1)',
            borderRadius: '12px',
            padding: '32px',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease',
            display: 'block',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: p.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#070b14',
              fontWeight: 700,
              fontSize: '1rem',
              marginBottom: '16px',
            }}>{p.label}</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '8px',
            }}>{p.title}</h2>
            <p style={{
              fontSize: '0.85rem',
              color: '#7b8ca1',
              lineHeight: 1.5,
            }}>{p.desc}</p>
          </Link>
        ))}
      </div>

      <p style={{ fontSize: '0.7rem', color: '#4a5568', textAlign: 'center' }}>
        Seleccione una propuesta para ver la versión completa de la página
      </p>
    </div>
  );
}
