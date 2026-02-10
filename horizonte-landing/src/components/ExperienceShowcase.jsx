import { site } from "../data/content";

function buildWhatsAppLink(text) {
  const phone = site.whatsappNumber || "";
  const msg = encodeURIComponent(text || "Hola! Quiero más info y reservar.");
  return `https://wa.me/${phone}?text=${msg}`;
}

export default function ExperienceShowcase({ items = [] }) {
  return (
    <div className="stack">
      {items.map((x, idx) => (
        <article key={x.id || x.title || idx} className="showcase card">
          {/* Media */}
          <div className="showcase-media frame">
            <img className="cover" src={x.image} alt={x.title} loading="lazy" />
          </div>

          {/* Content */}
          <div className="showcase-content">
            <h3 className="showcase-title">{x.title}</h3>
            {x.subtitle && <p className="showcase-subtitle">{x.subtitle}</p>}
            <p className="showcase-desc">{x.desc}</p>

            {Array.isArray(x.bullets) && x.bullets.length > 0 && (
              <ul className="showcase-list">
                {x.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            <div className="showcase-actions">
              <a
                className="btn btn-primary"
                href={buildWhatsAppLink(x.whatsappText)}
                target="_blank"
                rel="noreferrer"
              >
                {x.ctaLabel || "Reservar"}
              </a>
              <a className="btn" href="#contacto">
                Consultar
              </a>
            </div>

            {/* Mini media (fotos/videos) opcional */}
            {Array.isArray(x.gallery) && x.gallery.length > 0 && (
              <div className="mini-grid">
                {x.gallery.map((m, i) => (
                  <div key={i} className="mini-item frame">
                    {m.type === "video" ? (
                      <video
                        src={m.src}
                        controls
                        preload="metadata"
                        className="mini-video"
                      />
                    ) : (
                      <img
                        src={m.src}
                        alt={m.alt || x.title}
                        loading="lazy"
                        className="mini-img"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
