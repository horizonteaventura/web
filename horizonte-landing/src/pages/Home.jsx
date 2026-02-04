import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import Gallery from "../components/Gallery.jsx";
import VideoGrid from "../components/VideoGrid.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../components/Contact.jsx";
import { experiences, galleryImages, videos } from "../data/content.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        id="experiencias"
        kicker="Qué hacemos"
        title="Experiencias"
        subtitle="Opciones pensadas para grupos, familias o equipos. Ajustable según nivel."
      >
        <div className="grid grid-2">
          {experiences.map((e) => (
            <div key={e.title} className="card">
              <h3 style={{ margin: "0 0 8px" }}>{e.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="galeria"
        kicker="Fotos"
        title="Galería"
        subtitle="Imágenes desde /public/media/images. Solo reemplaza los archivos."
      >
        <Gallery images={galleryImages} />
      </Section>

      <Section
        id="videos"
        kicker="Videos"
        title="Videos"
        subtitle="Videos desde /public/media/videos (mp4)."
      >
        <VideoGrid items={videos} />
      </Section>
      <Section
        id="contacto"
        kicker="Hablemos"
        title="Contacto"
        subtitle="Reserva directa por WhatsApp o escríbenos desde el formulario."
      >
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
