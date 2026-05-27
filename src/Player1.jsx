import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Info, Target, Ruler, Maximize, Building2, Hotel, GraduationCap, HeartPulse, ShieldCheck, CheckCircle } from 'lucide-react';
import Header from './Header';
import './App.css'; // Global styles

function Player1() {
  useEffect(() => {
    document.title = "arte-elemental_Player1";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="app-container" style={{ backgroundColor: 'var(--p1-blanco)', color: 'var(--p1-negro)' }}>
      {/* GLOBAL HEADER */}
      <Header />

      {/* FLOATING NAVIGATION BUTTON */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="floating-nav"
      >
        <Link to="/player2" className="floating-nav-link">
          Siguiente Obra &rarr;
        </Link>
      </motion.div>

      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundColor: 'var(--p1-blanco)', position: 'relative' }}>
        <div className="hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero-tag" style={{ backgroundColor: 'rgba(255, 128, 229, 0.1)', color: 'var(--p1-rosa)' }}>Player 1</span>
            <h1 className="hero-title" style={{ color: 'var(--p1-azul)' }}>
              Resonancia <br /><span className="p1-text-gradient">Zen</span>
            </h1>
            <p className="hero-description" style={{ color: 'var(--secondary-dark-gray)' }}>
              Una obra tríptica que captura la esencia efímera de la primavera japonesa, transformando el espacio urbano en un santuario de contemplación.
            </p>

            <div className="hero-quote" style={{ borderLeftColor: 'var(--p1-rosa)', color: 'var(--p1-azul)' }}>
              "El silencio florece donde el tiempo se detiene"
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-images"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ justifyContent: 'center' }}
        >
          {/* Main Visual for Hero */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width: '100%', maxWidth: '750px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)' }}
          >
            <motion.img
              src="/Complete_Player_1.webp"
              alt="Tríptico Resonancia Zen"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* STORYTELLING / BIOFÍLICO */}
      <section className="section" style={{ backgroundColor: 'var(--p1-beige-claro)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--p1-azul)', marginBottom: '2rem' }}>
            Sakura <span className="p1-text-gradient">lo transitorio y hermoso de la vida</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ maxWidth: '500px', margin: '0 auto 3rem auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
          >
            <img src="/Complete_Player_1.webp" alt="Obra Completa - Resonancia Zen" style={{ width: '100%', display: 'block' }} />
          </motion.div>

          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            A través de la rama de cerezo en flor (<em>sakura</em>), esta pieza narra la filosofía del <em>mono no aware</em> —la sensibilidad hacia la transitoriedad de la vida— invitando al espectador a encontrar calma en medio del caos cotidiano.
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.8' }}>
            Arriba a la izquierda, la primavera explota en flores rosadas contra un cielo azul intenso. En el centro, las ramas nos guían hacia el tronco que da vida al cerezo. Abajo a la derecha, las raíces se hunden en la arena meditativa de un jardín zen, anclando la obra en la quietud de la tierra.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <HeartPulse color="var(--p1-rosa)" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--p1-azul)' }}>Conexión Emocional</h3>
              <p style={{ fontSize: '0.95rem' }}>Con la naturaleza a través de elementos simbólicos universales.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <Leaf color="var(--p1-rosa)" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--p1-azul)' }}>Complejidad y Orden</h3>
              <p style={{ fontSize: '0.95rem' }}>Patrones visuales que reducen significativamente el estrés visual.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GALERÍA / MOCKUP */}
      <section className="section" style={{ backgroundColor: 'var(--p1-gris)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--p1-azul)', marginBottom: '3rem' }}>La Obra en <span className="p1-text-gradient">Tu Espacio</span></h2>

          <div className="p1-mockup-container hover-impact">
            <img src="/Complete_Player_1_mockup.webp" alt="Mockup en Sala" className="base-img" style={{ objectFit: 'contain', width: '100%', height: '100%', display: 'block' }} />
            <div className="hover-overlay">
              <span className="overlay-text" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Resonancia Zen</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DETALLE TÉCNICO */}
      <section className="section" style={{ backgroundColor: 'var(--p1-blanco)' }}>
        <motion.div className="technical-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div>
            <motion.h2 variants={fadeUp} style={{ fontSize: '3rem', color: 'var(--p1-azul)', marginBottom: '2rem' }}>
              Detalle <span className="p1-text-gradient">Técnico</span>
            </motion.h2>

            <motion.ul className="tech-list" variants={staggerContainer}>
              <motion.li variants={fadeUp} style={{ borderBottomColor: 'rgba(0,0,0,0.1)' }}>
                <Info className="tech-icon" color="var(--p1-rosa)" />
                <div style={{ color: 'var(--p1-negro)' }}>
                  <strong style={{ display: 'block', color: 'var(--p1-azul)' }}>Materiales</strong>
                  Lienzo de algodón 100% de grano medio, pintura acrílica de alta cobertura y barniz acrílico brillante UV-resistant.
                </div>
              </motion.li>
              <motion.li variants={fadeUp} style={{ borderBottomColor: 'rgba(0,0,0,0.1)' }}>
                <Target className="tech-icon" color="var(--p1-rosa)" />
                <div style={{ color: 'var(--p1-negro)' }}>
                  <strong style={{ display: 'block', color: 'var(--p1-azul)' }}>Bastidor</strong>
                  Madera de pino de 3 cm de profundidad, con refuerzo estructural.
                </div>
              </motion.li>
              <motion.li variants={fadeUp} style={{ borderBottomColor: 'rgba(0,0,0,0.1)' }}>
                <Maximize className="tech-icon" color="var(--p1-rosa)" />
                <div style={{ color: 'var(--p1-negro)' }}>
                  <strong style={{ display: 'block', color: 'var(--p1-azul)' }}>Características del Enmarcado</strong>
                  Laterales pintados de 3 cm (sin marco tradicional). Instalación flotante percibiendo los paneles como independientes.
                </div>
              </motion.li>
            </motion.ul>
          </div>

          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: 'var(--p1-beige-claro)', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--p1-azul)', marginBottom: '1rem' }}>Dimensiones Total Conjunto</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.8rem' }}><strong>Ancho ocupado:</strong> ~200 cm (incluyendo 10cm de separación)</li>
                <li style={{ marginBottom: '0.8rem' }}><strong>Alto ocupado:</strong> ~40 cm (instalación diagonal escalonada)</li>
                <li style={{ marginBottom: '0.8rem' }}><strong>Profundidad:</strong> 3 cm</li>
                <li style={{ marginBottom: '0.8rem' }}><strong>Peso aproximado:</strong> 2.5 - 3 kg</li>
              </ul>
              <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px' }}>
                <Ruler size={24} color="var(--p1-rosa)" style={{ marginBottom: '0.5rem' }} />
                <p style={{ fontSize: '0.9rem' }}>Paneles individuales: 60 cm x 20 cm cada uno.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* APLICACIONES */}
      <section className="section" style={{ backgroundColor: 'var(--p1-gris)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--p1-azul)', marginBottom: '1rem' }}>Aplicaciones <span className="p1-text-gradient">Adicionales</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-dark-gray)', maxWidth: '600px', margin: '0 auto' }}>
            Espacios donde la obra potencia el diseño de interiores y la experiencia de usuario.
          </p>
        </motion.div>

        <motion.div className="app-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3 style={{ color: 'var(--p1-azul)' }}><Building2 color="var(--p1-rosa)" /> Espacios Corporativos</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Salas de espera y recepción</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Oficinas de terapia y bienestar</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Coworking y espacios creativos</li>
            </ul>
          </motion.div>

          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3 style={{ color: 'var(--p1-azul)' }}><Hotel color="var(--p1-rosa)" /> Hospitalidad y Retail</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Hoteles boutique y spas</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Restaurantes de cocina fusión</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Tiendas de diseño y lifestyle</li>
            </ul>
          </motion.div>

          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3 style={{ color: 'var(--p1-azul)' }}><GraduationCap color="var(--p1-rosa)" /> Residencial Premium</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Salas de meditación o yoga</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Dormitorios principales</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Home offices</li>
            </ul>
          </motion.div>

          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3 style={{ color: 'var(--p1-azul)' }}><Target color="var(--p1-rosa)" /> Usos Alternativos</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Fotografía de producto</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Escenografía para eventos</li>
              <li><CheckCircle size={18} color="var(--p1-rosa)" /> Instalación modular itinerante</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER / CIERRE */}
      <section className="guarantee-banner" style={{ background: 'var(--p1-azul)', color: 'white' }}>
        <Leaf size={64} style={{ color: 'var(--p1-rosa)', marginBottom: '2rem' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontStyle: 'italic', fontWeight: '300' }}>
          "En cada pétalo rosa, un recordatorio: la belleza reside en el momento presente."
        </h2>
        <p style={{ fontSize: '1.25rem', marginTop: '2rem', opacity: 0.9 }}>
          La naturaleza transforma. Player 1 es una invitación a respirar.
        </p>
        <button className="btn-primary" style={{ backgroundColor: 'var(--p1-rosa)', color: 'white' }}>
          Adquirir Obra
        </button>
      </section>
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
      </footer>    </div>
  );
}

export default Player1;
