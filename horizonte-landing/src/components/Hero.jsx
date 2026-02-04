import { site } from "../data/content";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="card hero-card">
          <div className="hero-wrap">
            <div>
              <div className="kicker">Río Maipo • Isla de Maipo</div>
              <h1>{site.tagline}</h1>
              <p>
                Bajadas guiadas, seguras y contemplativas. Fotos reales + videos de la experiencia.
                Reserva directo por WhatsApp.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
                  Reservar por WhatsApp
                </a>
                <a className="btn" href="#galeria">
                  Ver galería
                </a>
              </div>

              <div className="badges">
                <span className="badge">~3 horas</span>
                <span className="badge">Guías + equipo</span>
                <span className="badge">Apto principiantes</span>
                <span className="badge">Fotos incluidas</span>
              </div>
            </div>

            {/* Cambia esto por tu mejor foto */}
            <div className="frame frame-hero">
              <img className="cover" src="/media/images/galeria-1.jpg" alt="Horizonte Aventura" />
            </div>

            {/* Si quieres video en portada, usa esto:
            <div className="frame frame-hero">
              <video className="cover" src="/media/videos/promo-1.mp4" autoPlay muted loop playsInline />
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
