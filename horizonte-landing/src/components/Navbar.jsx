import { site } from "../data/content";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand">{site.brand}</div>

        <div className="nav-links">
          <a href="#experiencias">Experiencias</a>
          <a href="#galeria">Galería</a>
          <a href="#videos">Videos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="nav-cta">
          <a className="btn" href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}
