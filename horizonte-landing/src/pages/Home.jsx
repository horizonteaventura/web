import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../components/Contact.jsx";
import ExperienceShowcase from "../components/ExperienceShowcase.jsx";
import { experiences } from "../data/content.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" />
      <Hero />

      <div className="section section--a" id="experiencias">
        <div className="container">
          <div className="kicker">Experiencias</div>
          <h2 className="title">Fotos, videos y detalle por actividad</h2>
          <p className="subtitle">
            Cada experiencia incluye guía, equipamiento e inducción de seguridad.
          </p>

          <ExperienceShowcase items={experiences} />
        </div>
      </div>

      <div className="section section--c" id="contacto">
        <div className="container">
          <div className="kicker">Hablemos</div>
          <h2 className="title">Contacto</h2>
          <p className="subtitle">Reserva por WhatsApp o déjanos tus datos.</p>
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}
