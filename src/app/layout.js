import './globals.css';
import './navbar-hero.css';
import './components.css';

export const metadata = {
  title: 'MarineTex — Outdoor Textile | Textiles Premium para Exterior',
  description: 'MarineTex®, marca líder en textiles de alta calidad para aplicaciones exteriores y marinas. Fabricación 100% Europea, resistentes a climas extremos, con garantía de hasta 10 años.',
  keywords: 'textiles outdoor, telas marinas, telas exterior, acrílico tintado en masa, MarineTex, toldos, embarcaciones, telas premium Chile',
  openGraph: {
    title: 'MarineTex — Outdoor Textile',
    description: 'Textiles premium de fabricación europea para exterior y marina. Garantía de hasta 10 años.',
    url: 'https://marinetex.cl',
    siteName: 'MarineTex',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
