import { site } from "../data/content";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="card hero-card">
          <div className="hero-wrap">
            <div>
              <div className="kicker">Travesías en kayak por el Río Maipo</div>
              <h1>{site.tagline}</h1>
              <p>
                Una experiencia guiada, segura y cuidadosamente diseñada para quienes valoran la naturaleza y el detalle.
                Remarás acompañado por guías expertos, con equipamiento técnico profesional y en un entorno natural privilegiado del Río Maipo.
                Aquí no vienes solo a navegar.
                Vienes a vivir el río con presencia, calma y autenticidad.
                Grupos reducidos.
                Planificación precisa.
                Atención personalizada en cada etapa.
                <p><strong>Incluye:</strong></p>

                <ul>
                  <li>Equipamiento técnico de alta calidad</li>
                  <li>Guías certificados con experiencia en río</li>
                  <li>Registro fotográfico profesional incluido</li>
                  <li>Inducción personalizada (apto para principiantes)</li>
                </ul>
                <p><strong>Duración aproximada:</strong> 3 horas.</p>

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
                <span className="badge">Grupos reducidos</span>
                <span className="badge">Atención personalizada</span>
                <span className="badge">Seguridad profesional</span>
                <span className="badge">Registro incluido</span>
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
