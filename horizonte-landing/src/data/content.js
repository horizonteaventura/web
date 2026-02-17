export const site = {
  brand: "Horizonte Aventura",
  instagram: "https://www.instagram.com/horizonte.aventura/",
  whatsappNumber: "56995095242", // sin +, sin espacios
};

export const experiences = [
  // 1) Travesías en kayak por el Río Maipo
  {
    id: "kayak-maipo",
    title: "Travesías en kayak por el Río Maipo",
    subtitle: "Presencia, calma y autenticidad en el Río Maipo",
    desc:
      "Una experiencia guiada, segura y cuidadosamente diseñada para quienes valoran la naturaleza y el detalle.\n" +
      "Remarás acompañado por guías expertos, con equipamiento técnico profesional y en un entorno natural privilegiado del Río Maipo.\n\n" +
      "Aquí no vienes solo a navegar.\n" +
      "Vienes a vivir el río con presencia, calma y autenticidad.\n\n" +
      "Grupos reducidos.\n" +
      "Planificación precisa.\n" +
      "Atención personalizada en cada etapa.\n\n" +
      "Duración aproximada: 3 horas.",
    includesTitle: "Incluye:",
    bullets: [
      "Equipamiento técnico de alta calidad",
      "Guías certificados con experiencia en río",
      "Registro fotográfico profesional incluido",
      "Inducción personalizada (apto para principiantes)",
    ],
    tags: ["Grupos reducidos", "Planificación precisa", "Atención personalizada", "Registro incluido"],
    image: "/media/images/exp-medio-dia.jpg",
    whatsappText:
      "Hola! Quiero reservar la experiencia 'Travesías en kayak por el Río Maipo'. Somos ___ personas. ¿Qué disponibilidad hay?",
    ctaLabel: "Reservar experiencia",
    secondaryCtaLabel: "Explorar galería",
    secondaryCtaHref: "#galeria",
    galleryId: "galeria",
    gallery: [
      { type: "image", src: "/media/images/galeria-1.jpg", alt: "Travesía 1" },
      { type: "image", src: "/media/images/galeria-2.jpg", alt: "Travesía 2" },
      { type: "video", src: "/media/videos/promo-1.mp4", title: "Promo travesía" },
    ],
  },

  // 2) Full Day Privado · Río + Parcela
  {
    id: "fullday-privado-parcela",
    title: "Full Day Privado · Río + Parcela",
    subtitle: "Aventura + descanso en un entorno privado",
    desc:
      "Una jornada completa diseñada para quienes buscan combinar aventura y descanso en un entorno natural cuidado y exclusivo.\n\n" +
      "La experiencia comienza en el río, con una travesía guiada y segura por el Río Maipo. Luego, el día continúa en un espacio privado, donde podrás relajarte, compartir y disfrutar sin apuro.\n\n" +
      "No es solo una actividad.\n" +
      "Es un día completo bien planificado.\n\n" +
      "Ideal para celebraciones privadas, encuentros familiares o grupos que valoran calidad y organización.",
    includesTitle: "Incluye:",
    bullets: [
      "Travesía guiada en kayak (grupos reducidos)",
      "Equipamiento técnico profesional",
      "Guías certificados",
      "Uso exclusivo de parcela con quincho y/o piscina (según disponibilidad)",
      "Espacios para ducharse y cambiarse",
    ],
    tags: ["Privado", "Jornada completa", "Entorno exclusivo", "Coordinación premium"],
    image: "/media/images/exp-fullday-parcela.jpg",
    whatsappText:
      "Hola! Quiero reservar 'Full Day Privado · Río + Parcela'. Somos ___ personas. ¿Me confirmas disponibilidad y condiciones?",
    ctaLabel: "Reservar experiencia Full Day",
    secondaryCtaLabel: "Consultar disponibilidad",
    secondaryCtaHref:
      "https://wa.me/56995095242?text=" +
      encodeURIComponent(
        "Hola! Quisiera consultar disponibilidad para 'Full Day Privado · Río + Parcela'. Fecha estimada: ____. Personas: ____."
      ),
    gallery: [
      { type: "image", src: "/media/images/galeria-1.jpg", alt: "Full day parcela 1" },
      { type: "image", src: "/media/images/galeria-2.jpg", alt: "Full day parcela 2" },
      { type: "video", src: "/media/videos/promo-1.mp4", title: "Promo Full Day" },
    ],
  },

  // 3) Experiencia Clásica · Travesía de Medio Día
  {
    id: "clasica-medio-dia",
    title: "Experiencia Clásica · Travesía de Medio Día",
    subtitle: "Segura, guiada y cuidadosamente planificada",
    desc:
      "Una experiencia guiada, segura y bien planificada para disfrutar el Río Maipo con calma y confianza.\n\n" +
      "Durante aproximadamente 3 horas, navegarás acompañado por guías expertos, con equipamiento técnico profesional y una inducción personalizada antes de ingresar al río.\n\n" +
      "No se trata solo de remar.\n" +
      "Se trata de vivir el entorno con tranquilidad, seguridad y atención en los detalles.",
    includesTitle: "Incluye:",
    bullets: [
      "Duración aproximada: 3 horas",
      "Inducción personalizada (apta para principiantes)",
      "Equipamiento técnico completo",
      "Guías certificados con experiencia en río",
      "Espacios para ducharse y cambiarse",
    ],
    tags: ["Clásica", "Apta para principiantes", "Seguridad profesional"],
    image: "/media/images/exp-medio-dia.jpg",
    whatsappText:
      "Hola! Quiero reservar la 'Experiencia Clásica · Travesía de Medio Día'. Somos ___ personas. ¿Qué horarios tienen?",
    ctaLabel: "Reservar experiencia",
    secondaryCtaLabel: "Consultar disponibilidad",
    secondaryCtaHref: "#contacto",
    gallery: [
      { type: "image", src: "/media/images/galeria-1.jpg", alt: "Medio día 1" },
      { type: "image", src: "/media/images/galeria-2.jpg", alt: "Medio día 2" },
    ],
  },

  // 4) Experiencias Privadas & Corporativas
  {
    id: "privadas-corporativas",
    title: "Experiencias Privadas & Corporativas",
    subtitle: "Propuestas a medida para equipos, grupos y celebraciones",
    desc:
      "Diseñamos jornadas a medida para empresas, equipos y celebraciones privadas que buscan algo distinto.\n\n" +
      "Cada experiencia se planifica cuidadosamente: logística, horarios, nivel de dificultad y acompañamiento profesional.\n\n" +
      "No trabajamos con formatos rígidos.\n" +
      "Creamos propuestas personalizadas según el objetivo del grupo.\n\n" +
      "Ya sea una salida corporativa, una celebración especial o una actividad privada, coordinamos cada detalle para que el grupo solo se dedique a vivir la experiencia.",
    includesTitle: "Incluye:",
    bullets: [
      "Experiencias privadas o corporativas",
      "Planificación y coordinación personalizada",
      "Logística organizada según el grupo",
      "Guías certificados y soporte profesional",
    ],
    tags: ["A medida", "Corporativo", "Privado", "Coordinación personalizada"],
    image: "/media/images/exp-servicios-particulares.jpg",
    whatsappText:
      "Hola! Quiero solicitar una propuesta privada/corporativa. Personas: ____. Fecha estimada: ____. Objetivo: ____.",
    ctaLabel: "Solicitar propuesta privada",
    secondaryCtaLabel: "Consultar disponibilidad",
    secondaryCtaHref: "#contacto",
    gallery: [],
  },
];
