import { site } from "../data/content";

export default function Contact() {
  return (
    <div className="grid grid-2">
      {/* Card: contacto directo */}
      <div className="card">
        <div className="kicker">Contacto</div>
        <h2 className="title" style={{ marginTop: 0 }}>Reserva y consultas</h2>
        <p className="subtitle">
          Escríbenos y coordinamos día, horario y tipo de experiencia (balsa/kayak).
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href={site.whatsappNumber} target="_blank" rel="noreferrer">
            Reservar por WhatsApp
          </a>
          <a className="btn" href={site.instagram} target="_blank" rel="noreferrer">
            Ver Instagram
          </a>
        </div>

        <div style={{ marginTop: 16, color: "var(--muted)", lineHeight: 1.7 }}>
          <div><strong>Ubicación:</strong> Isla de Maipo (Río Maipo)</div>
          <div><strong>Duración:</strong> ~3 horas</div>
          <div><strong>Recomendación:</strong> Traer bloqueador, agua y ropa cómoda</div>
        </div>
      </div>

      {/* Card: formulario simple (sin backend) */}
      <div className="card">
        <div className="kicker">Formulario</div>
        <h3 style={{ margin: "0 0 10px" }}>Déjanos tus datos</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const nombre = form.get("nombre");
            const personas = form.get("personas");
            const mensaje = form.get("mensaje");

            const text = encodeURIComponent(
              `Hola Horizonte Aventura, soy ${nombre}. Somos ${personas} personas. ${mensaje}`
            );

            // Abrir WhatsApp con el mensaje
            window.open(site.whatsappNumber.split("?")[0] + `?text=${text}`, "_blank", "noreferrer");
          }}
        >
          <label style={{ display: "block", marginBottom: 10 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>Nombre</div>
            <input name="nombre" required placeholder="Tu nombre"
              style={inputStyle} />
          </label>

          <label style={{ display: "block", marginBottom: 10 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>N° de personas</div>
            <input name="personas" required placeholder="Ej: 4"
              style={inputStyle} />
          </label>

          <label style={{ display: "block", marginBottom: 14 }}>
            <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>Mensaje</div>
            <textarea name="mensaje" rows="4" placeholder="Ej: queremos Full Day / media jornada, preferimos fin de semana..."
              style={{ ...inputStyle, resize: "vertical" }} />
          </label>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Enviar por WhatsApp
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
