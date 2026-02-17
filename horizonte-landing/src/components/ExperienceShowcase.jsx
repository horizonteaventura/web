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

            {/* Desc con saltos de línea */}
            {x.desc && (
              <p className="showcase-desc preline">
                {x.desc}
              </p>
            )}

            {/* Tags / chips */}
            {Array.isArray(x.tags) && x.tags.length > 0 && (
              <div className="showcase-tags">
                {x.tags.map((t, i) => (
                  <span key={i} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Lista (Incluye) */}
            {Array.isArray(x.bullets) && x.bullets.length > 0 && (
              <div className="showcase-includes">
                <p className="showcase-includes-title">
                  <strong>{x.includesTitle || "Incluye:"}</strong>
                </p>
                <ul className="showcase-list">
                  {x.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="showcase-actions">
              {/* Botón principal */}
              <a
                className="btn btn-primary"
                href={buildWhatsAppLink(x.whatsappText)}
                target="_blank"
                rel="noreferrer"
              >
                {x.ctaLabel || "Coordinar experiencia"}
              </a>

              {/* Botón secundario configurable */}
              {x.secondaryCtaLabel ? (
                <a
                  className="btn"
                  href={x.secondaryCtaHref || "#contacto"}
                  target={x.secondaryCtaHref?.startsWith("http") ? "_blank" : undefined}
                  rel={x.secondaryCtaHref?.startsWith("http") ? "noreferrer" : undefined}
                >
                  {x.secondaryCtaLabel}
                </a>
              ) : (
                <a className="btn" href="#contacto">
                  Consultar disponibilidad
                </a>
              )}
            </div>

            {/* Mini media (galería) opcional */}
            {Array.isArray(x.gallery) && x.gallery.length > 0 && (
              <div className="mini-grid" id={x.galleryId}>
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
