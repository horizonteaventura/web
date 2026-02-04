import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" id="contacto" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>© {new Date().getFullYear()} {site.brand}</div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

