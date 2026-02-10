export const site = {
  brand: "Horizonte Aventura",
  instagram: "https://www.instagram.com/horizonte.aventura/",
  whatsappNumber: "569XXXXXXXX", // <- tu número sin +, sin espacios
};

export const experiences = [
  {
    id: "fullday-parcela",
    title: "Full Day con parcela (quincho/piscina)",
    subtitle: "Río + descanso: una jornada completa para disfrutar",
    desc:
      "Vive la travesía guiada por el Río Maipo y, al terminar, disfruta el día en un espacio privado (parcela) con opción de quincho/piscina. Ideal para grupos, familias y celebraciones. Incluye equipamiento completo, inducción y guías especializados. Al finalizar hay espacio para ducharse y cambiarse.",
    bullets: [
      "Travesía guiada + día completo",
      "Opción quincho / piscina (según disponibilidad)",
      "Guía + equipamiento + inducción de seguridad",
      "Espacios para ducharse y cambiarse",
    ],
    image: "/media/images/exp-fullday-parcela.jpg",
    whatsappText:
      "Hola! Quiero reservar Full Day con parcela (quincho/piscina). Somos ___ personas. ¿Fechas disponibles y valores?",
    ctaLabel: "Reservar Full Day (parcela)",
    // Opcional: mini fotos y/o videos dentro del bloque
    gallery: [
      { type: "image", src: "/media/images/galeria-1.jpg", alt: "Full day parcela 1" },
      { type: "image", src: "/media/images/galeria-2.jpg", alt: "Full day parcela 2" },
      { type: "video", src: "/media/videos/promo-1.mp4", title: "Promo Full Day" },
    ],
  },

  {
    id: "fullday-sin-parcela",
    title: "Full Day sin parcela",
    subtitle: "Travesía + tiempo libre (sin uso de parcela)",
    desc:
      "Una jornada completa pensada para quienes quieren hacer la actividad y luego seguir el día por su cuenta. Incluye travesía guiada en el Río Maipo, equipamiento completo e inducción de seguridad. Al finalizar hay espacio para ducharse y cambiarse.",
    bullets: [
      "Travesía guiada (aprox. 3 horas)",
      "Guía + equipamiento + inducción de seguridad",
      "Espacio para ducharse y cambiarse",
      "Ideal para parejas y grupos",
    ],
    image: "/media/images/exp-fullday-sin-parcela.jpg",
    whatsappText:
      "Hola! Quiero cotizar Full Day sin parcela. Somos ___ personas. ¿Fechas disponibles y valores?",
    ctaLabel: "Reservar Full Day",
    gallery: [
      { type: "image", src: "/media/images/galeria-3.jpg", alt: "Full day 1" },
      { type: "video", src: "/media/videos/promo-2.mp4", title: "Promo" },
    ],
  },

  {
    id: "medio-dia",
    title: "Actividades de medio día",
    subtitle: "La experiencia clásica: segura, guiada y sin complicaciones",
    desc:
      "Travesías guiadas de aproximadamente 3 horas, pensadas para disfrutar el río con tranquilidad. Ajustamos el nivel según el grupo. Incluye equipamiento completo, inducción de seguridad y acompañamiento de guías. Al finalizar hay espacio para ducharse y cambiarse.",
    bullets: [
      "Duración: ~3 horas",
      "Apta para principiantes (nivel ajustable)",
      "Guía + equipamiento + inducción de seguridad",
      "Espacio para ducharse y cambiarse",
    ],
    image: "/media/images/exp-medio-dia.jpg",
    whatsappText:
      "Hola! Quiero reservar una actividad de medio día. Somos ___ personas. ¿Qué opciones y valores tienen?",
    ctaLabel: "Reservar medio día",
    gallery: [
      { type: "image", src: "/media/images/galeria-1.jpg", alt: "Medio día 1" },
      { type: "image", src: "/media/images/galeria-2.jpg", alt: "Medio día 2" },
    ],
  },

  {
    id: "servicios-particulares",
    title: "Servicios particulares",
    subtitle: "Plan a medida para empresas, grupos y celebraciones",
    desc:
      "Armamos experiencias personalizadas según tu necesidad: salidas privadas, actividades para empresas, celebraciones, convenios o coordinaciones especiales. Cuéntanos tu idea y armamos una propuesta con horarios, logística y recomendaciones.",
    bullets: [
      "Experiencia privada o corporativa",
      "Coordinación a medida (horarios y logística)",
      "Opciones para grupos / celebraciones",
      "Soporte y guía especializada",
    ],
    image: "/media/images/exp-servicios-particulares.jpg",
    whatsappText:
      "Hola! Quiero coordinar un servicio particular para un grupo/empresa. Somos ___ personas. ¿Podemos revisar opciones y disponibilidad?",
    ctaLabel: "Cotizar servicio particular",
    gallery: [],
  },
];
