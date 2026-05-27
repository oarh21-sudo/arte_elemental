import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Mail, Send, Check } from 'lucide-react';
import Header from './Header';
import './App.css';

function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState('both');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleQuoteClick = (artworkKey) => {
    setSelectedArtwork(artworkKey);
    scrollToSection('cotizar');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="home-container" style={{ backgroundColor: '#FCFBF9', color: '#1C1C1C', fontFamily: 'var(--font-main)', paddingBottom: '4rem' }}>
      {/* GLOBAL UNIFIED HEADER */}
      <Header />

      {/* 1. HERO SECTION (INICIATIVA DIRECTA) */}
      <section className="home-hero-simple">
        <div className="hero-simple-content">
          <div className="hero-simple-wrapper">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hero-text-center"
            >
              <span className="hero-badge">Arte Elemental</span>
              <h1 className="hero-title-large">
                Arte con raíz.<br />
                <span className="p1-text-gradient">Visión global.</span>
              </h1>
              <p className="hero-subtitle-simple">
                Fusionamos la potencia plástica y conceptual del arte venezolano contemporáneo con la infraestructura y proyección logística de Colombia. Diseñamos obras en diferentes formatos y proyectos site-specific que redefinen la arquitectura y promueven el bienestar biofílico.
              </p>
              <div className="hero-simple-actions">
                <button onClick={() => scrollToSection('obras')} className="btn-home-primary">
                  Explorar Obras <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-image-side"
            >
              <div className="hero-image-container">
                <img src="/pexels-michelamazonas-37180502.jpg" alt="Obra de Arte" className="hero-side-image" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INICIATIVA / MANIFIESTO CONCISO */}
      <section id="manifiesto" className="home-manifesto-simple">
        <div className="section-container-small">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="manifesto-card-simple"
          >
            <h2>Nuestra Iniciativa</h2>
            <p className="manifesto-paragraph-highlight">
              Conectamos el talento artístico más sensible con las necesidades de la arquitectura contemporánea de alta gama. 
            </p>
            <p className="manifesto-paragraph-body">
              Cada obra es una pieza d e diseño conceptual coordinada con la luz natural y la espacialidad. Mediante principios de diseño biofílico, nuestras piezas actúan como catalizadores de calma y equilibrio, reduciendo el estrés e incrementando la productividad y descanso en todos tus espacios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SHOWCASE / ENFASIS EN OBRAS */}
      <section id="obras" className="home-showcase-simple">
        <div className="section-container">
          <div className="showcase-simple-title">
            <span className="section-subtitle">Colección Curada</span>
            <h2>Obras Disponibles</h2>
            <p>Selecciona una obra para experimentar su narrativa interactiva en pantalla completa o cotizar su montaje personalizado.</p>
          </div>

          <div className="showcase-simple-grid">
            
            {/* Obra 1: Resonancia Zen */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="showcase-simple-card"
            >
              <div className="card-image-wrapper">
                <img src="/Complete_Player_1_mockup.webp" alt="Resonancia Zen en Sala Premium" />
                <div className="card-badge-top">Tríptico</div>
              </div>
              <div className="card-details-simple">
                <div className="card-header-row">
                  <h3>Resonancia Zen</h3>
                  <span className="card-collection-tag">Sakura</span>
                </div>
                <p className="card-desc-simple">
                  Composición monumental que captura la esencia efímera de la primavera y ancla el espacio en la quietud meditativa de un jardín zen.
                </p>
                <div className="card-actions-simple">
                  <Link to="/player1" className="btn-card-primary">
                    Explorar Obra <Sparkles size={14} style={{ marginLeft: '6px' }} />
                  </Link>
                  <a href="#" className="btn-card-secondary">
                    Cotizar Obra
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Obra 2: Dualidad Vital */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="showcase-simple-card"
            >
              <div className="card-image-wrapper">
                <img src="/image4.webp" alt="Dualidad Vital en Lobby Boutique" />
                <div className="card-badge-top-turquoise">Díptico Biofílico</div>
              </div>
              <div className="card-details-simple">
                <div className="card-header-row">
                  <h3>Dualidad Vital</h3>
                  <span className="card-collection-tag-turquoise">Conservación</span>
                </div>
                <p className="card-desc-simple">
                  Meditación visual basada en la rana dorada colombiana. Un puente emocional entre la exuberancia de la naturaleza y la urgencia climática.
                </p>
                <div className="card-actions-simple">
                  <Link to="/player2" className="btn-card-primary btn-turquoise">
                    Explorar Obra <Sparkles size={14} style={{ marginLeft: '6px' }} />
                  </Link>
                  <a href="#" className="btn-card-secondary-turquoise">
                    Cotizar Obra
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. COTIZAR EXPRESS (ENFASIS Y MINIMO DE CLICKS) */}
      <section id="cotizar" className="home-quote-express">
        <div className="section-container-small">
          <div className="quote-express-box">
            <div className="quote-header">
              <Mail className="quote-icon" />
              <h2>Cotización Express</h2>
              <p>Adquiere o cotiza un montaje site-specific adaptado a la arquitectura de tu espacio. Te contactaremos en menos de 24 horas.</p>
            </div>

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div 
                  key="quote-form"
                  className="quote-form-simple"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-input-group">
                    <a href="#" className="form-submit-btn">
                      Cotiza tu obra <Send size={16} style={{ marginLeft: '8px' }} />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="quote-success"
                  className="quote-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="success-icon-wrapper">
                    <Check size={28} />
                  </div>
                  <h3>¡Solicitud Recibida!</h3>
                  <p>Hemos registrado tu interés en <strong>{selectedArtwork === 'zen' ? 'Resonancia Zen' : selectedArtwork === 'vital' ? 'Dualidad Vital' : 'Ambas Colecciones'}</strong>. Un curador especializado se pondrá en contacto contigo con el catálogo de precios y dimensiones disponibles.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. MINIMALIST FOOTER */}
      <footer className="footer-simple">
        <div className="footer-simple-content">
          <div className="footer-logo-row">
            <span className="footer-brand-title">ARTE ELEMENTAL</span>
            <p>Arte contemporáneo curado desde la calidez del caribe venezolano y la pasión por el arte en Colombia.</p>
          </div>
          
          <div className="footer-contact-row">
            <span><strong>Contacto:</strong> curaduria@arteelemental.com</span>
            <span><strong>WhatsApp:</strong> +57 320 000 0000</span>
            <span><strong>Instagram:</strong> @arteelemental</span>
          </div>

          <div className="footer-bottom-row">
            <p>© 2026 Arte Elemental. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
