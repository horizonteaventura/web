import { site } from "../data/content";

function waLink(text) {
  const phone = (site.whatsappNumber || "").replace(/\D/g, "");
  const msg = encodeURIComponent(text || "Hola! Quiero coordinar una experiencia.");
  return `https://wa.me/${phone}?text=${msg}`;
}

export default function Contact() {
  return (
    <div className="grid grid-2">
      {/* Card: contacto directo */}
      <div className="card">
        <div className="kicker">Reserva</div>
        <h2 className="title" style={{ marginTop: 0 }}>
          Reserva & Coordinación
        </h2>
        <p className="subtitle">
          Agenda tu experiencia y coordinamos los detalles de manera personalizada.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            className="btn btn-primary"
            href={waLink("Hola! Quiero coordinar una experiencia. ¿Me ayudas con opciones y disponibilidad?")}
            target="_blank"
            rel="noreferrer"
          >
            Coordinar experiencia
          </a>

          <a
            className="btn"
            href={waLink("Hola! Quisiera consultar disponibilidad. Fecha estimada: ____. Personas: ____. Tipo: ____ (Medio día / Full Day / Privada).")}
            target="_blank"
            rel="noreferrer"
          >
            Consultar disponibilidad
          </a>

          <a className="btn" href={site.instagram} target="_blank" rel="noreferrer">
            Ver Instagram
          </a>
        </div>

        <div style={{ marginTop: 16, color: "var(--muted)", lineHeight: 1.7 }}>
          <div><strong>Ubicación:</strong> Isla de Maipo · Río Maipo</div>
        </div>
      </div>

      {/* Card: formulario simple (sin backend) */}
      <div className="card">
        <div className="kicker">Formulario</div>
        <h3 style={{ margin: "0 0 10px" }}>Solicitar experiencia</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);

            const nombre = form.get("nombre") || "";
            const personas = form.get("personas") || "";
            const fecha = form.get("fecha") || "";
            const tipo = form.get("tipo") || "";

            const text = `Hola Horizonte Aventura, soy ${nombre}. Somos ${personas} personas. Fecha estimada: ${fecha || "por definir"}. Tipo de experiencia: ${tipo}. ¿Podemos coordinar disponibilidad?`;

            window.open(waLink(text), "_blank", "noreferrer");
          }}
        >
          <label style={{ display: "block", marginBottom: 10 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>
              Nombre
            </div>
            <input
              name="nombre"
              required
              placeholder="Tu nombre"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "block", marginBottom: 10 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>
              Número de personas
            </div>
            <input
              name="personas"
              type="number"
              min="1"
              required
              placeholder="Ej: 4"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "block", marginBottom: 10 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>
              Fecha estimada
            </div>
            <input name="fecha" type="date" style={inputStyle} />
          </label>

          <label style={{ display: "block", marginBottom: 14 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>
              Tipo de experiencia
            </div>
            <select name="tipo" required defaultValue="" style={inputStyle}>
              <option value="" disabled>
                Selecciona…
              </option>
              <option value="Medio día">Medio día</option>
              <option value="Full Day">Full Day</option>
              <option value="Privada">Privada</option>
            </select>
          </label>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Solicitar coordinación
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 14,
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.06)",
  color: "var(--text)",
  outline: "none",
};
