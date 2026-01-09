import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SobreMi from './pages/SobreMi';
import Tratamientos from './pages/Tratamientos';
import Speaker from './pages/Speaker';
import Cursos from './pages/Cursos';

// Función para calcular años de trayectoria desde Junio 2016
const calculateYears = () => {
  const foundingDate = new Date(2016, 5); // Junio 2016 (mes 5 = junio)
  const today = new Date();
  let years = today.getFullYear() - foundingDate.getFullYear();
  // Si aún no llegamos a junio este año, restar 1
  if (today.getMonth() < foundingDate.getMonth()) {
    years--;
  }
  return years;
};

// Componente HomePage (página principal)
function HomePage() {
  const yearsOfExperience = calculateYears();

  return (
    <>
      <Header />
      {/* Contenedor con snap SOLO para las secciones */}
      <div className="scroll-container">
        <section id="home" className="section section-1">
          <div className="section-content hero-content">
            <h1>Dra. Daniela Maleh</h1>
            <p className="hero-subtitle">Médica dermatóloga y estética</p>
            <p className="hero-tagline">Fundadora de Due Derma · Más de {yearsOfExperience} años de trayectoria</p>
            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary" onClick={() => document.getElementById('treatments').scrollIntoView({ behavior: 'smooth' })}>
                Ver tratamientos
              </button>
              <a 
                href="https://api.whatsapp.com/send?phone=5491131420521&text=Hola%20Dra%20Maleh,%20quisiera%20solicitar%20una%20consulta..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-btn hero-btn-secondary"
              >
                Solicitar consulta
              </a>
            </div>
          </div>
        </section>
        
        <section id="about" className="section section-2">
          <div className="section-content about-me-content">
            <h1>Sobre mí</h1>
            
            <div className="about-me-grid">
              <div className="about-me-card">
                <div className="about-me-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Formación</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              
              <div className="about-me-card">
                <div className="about-me-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3>Enfoque médico</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              
              <div className="about-me-card">
                <div className="about-me-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>Qué me diferencia</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

            <Link to="/sobre-mi" className="about-me-link">
              Conocer mi trayectoria completa
            </Link>
          </div>
        </section>

        <section id="treatments" className="section section-3">
          <div className="treatments-content">
            <h1 className="treatments-title">Tratamientos</h1>
            <p className="treatments-subtitle">Especializada en Medicina Inyectable</p>
            
            <div className="treatments-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>

            <div className="treatments-buttons">
              <Link to="/tratamientos" className="treatments-btn treatments-btn-primary">
                Ver todos los tratamientos
              </Link>
              <a 
                href="https://duederma.com.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="treatments-btn treatments-btn-secondary"
              >
                Ver tratamientos en Due Derma <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="equipo" className="section section-4">
          <div className="section-content equipo-content">
            <h1>Equipo Due Derma</h1>
            <p className="equipo-subtitle">Un espacio médico especializado en dermatología clínica y estética</p>
            
            <div className="equipo-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <a 
              href="https://duederma.com.ar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="equipo-btn"
            >
              Conocer el equipo
            </a>
          </div>
        </section>

        <section id="speaker" className="section section-5">
          <div className="section-content speaker-content">
            <h1>Speaker & Cursos</h1>
            <p className="speaker-subtitle">Disertante en congresos, formadora de profesionales y creadora de cursos especializados</p>
            
            <div className="speaker-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="speaker-buttons">
              <Link to="/speaker" className="speaker-btn speaker-btn-primary">
                Ver charlas y participaciones
              </Link>
              <Link to="/cursos" className="speaker-btn speaker-btn-primary">
                Ver cursos
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer fuera del scroll snap */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=5491131420521&text=Hola%20Dra%20Maleh,%20quisiera%20recibir%20más%20información%20sobre..." 
         target="_blank" 
         rel="noopener noreferrer" 
         className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

// Componente principal con rutas
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/tratamientos" element={<Tratamientos />} />
      <Route path="/speaker" element={<Speaker />} />
      <Route path="/cursos" element={<Cursos />} />
    </Routes>
  );
}

export default App;
