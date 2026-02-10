import { useState } from "react";
import { site } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="nav">
      <div className="container nav-inner">
        {/* Brand + logo */}
        <a className="brand" href="#home" onClick={close}>
          {/* Cambia el path al logo que tengas en /public */}
          <img
            className="brand-logo"
            src="/media/images/logo.png"
            alt="Horizonte Aventura"
          />
          <span>{site.brand}</span>
        </a>

        {/* Links desktop */}
        <div className="nav-links nav-links--desktop">
          <a href="#experiencias">Experiencias</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/* CTA + burger */}
        <div className="nav-cta">
          <a className="btn" href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
            Reservar
          </a>

          <button
            className="burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="nav-mobile">
          <div className="container nav-mobile-inner">
            <a href="#experiencias" onClick={close}>Experiencias</a>
            <a href="#galeria" onClick={close}>Galería</a>
            <a href="#contacto" onClick={close}>Contacto</a>

            <div className="nav-mobile-cta">
              <a className="btn" href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
                Reservar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
