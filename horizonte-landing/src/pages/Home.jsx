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

      {/* EXPERIENCIAS */}
      <div className="section section--a" id="experiencias">
        <div className="container">
          <div className="kicker">Experiencias</div>
          <h2 className="title">
            Travesías y experiencias en el Río Maipo
          </h2>
          <p className="subtitle">
            Cada experiencia está diseñada con planificación precisa, guías certificados y equipamiento profesional.
          </p>

          <ExperienceShowcase items={experiences} />
        </div>
      </div>

      {/* RESERVA */}
      <div className="section section--c" id="contacto">
        <div className="container">
          <div className="kicker">Reserva</div>
          <h2 className="title">Reserva & Coordinación</h2>
          <p className="subtitle">
            Agenda tu experiencia y coordinamos los detalles de manera personalizada.
          </p>
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}
