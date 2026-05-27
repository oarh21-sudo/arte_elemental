import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Info, Maximize, Target, Building2, Hotel, GraduationCap, HeartPulse, ShieldCheck, Leaf, Ruler, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './App.css'

function Player2() {
  useEffect(() => {
    document.title = "arte-elemental_Player2";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <div className="app-container">
      {/* GLOBAL HEADER */}
      <Header />

      {/* FLOATING NAVIGATION BUTTON */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="floating-nav left-side"
      >
        <Link to="/player1" className="floating-nav-link" style={{ color: 'var(--primary-turquoise)', border: '1px solid rgba(22, 160, 133, 0.2)' }}>
          &larr; Obra Anterior
        </Link>
      </motion.div>

      {/* SECTION 1: HERO / STORYTELLING BIOFÍLICO */}
      <section className="hero">
        <div className="hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero-tag">Player 2</span>

            <h1 className="hero-title">
              Dualidad <br /><span className="text-gradient">Vital</span>
            </h1>
            <p className="hero-description">
              Una obra díptica que narra la historia de la resiliencia de la naturaleza a través de la rana dorada, especie icónica de la biodiversidad colombiana.
            </p>
            <p className="hero-description">
              El panel izquierdo celebra la exuberancia de un ecosistema próspero, donde la vida florece en un ballet de colores turquesa, verdes tropicales y dorados vibrantes. El panel derecho, en contraste, evoca la urgencia de la conservación, mostrando la misma especie en un entorno degradado pero manteniendo su dignidad dorada.
            </p>
            <p className="hero-description">
              Esta obra se alinea perfectamente con los principios del diseño biofílico, actuando como un puente emocional entre el espectador urbano y los ecosistemas naturales. Es un recordatorio visual de nuestra responsabilidad ambiental y un catalizador de bienestar que reduce el estrés, estimula la creatividad y genera conciencia ecológica en espacios corporativos y de hospitalidad.
            </p>
            <div className="hero-quote">
              "La naturaleza no es un lujo, es una necesidad."
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-images"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hero-diptych-panel panel-left">
            <img src="/image3.webp" alt="Panel Izquierdo - Rana Dorada en esplendor" className="hero-cropped-img" />
          </div>
          <div className="hero-diptych-panel panel-right">
            <img src="/image2.webp" alt="Panel Derecho - Rana Dorada en contraste" className="hero-cropped-img" />
          </div>
        </motion.div>
      </section>

      {/* NEW SECTION: LA OBRA COMPLETA */}
      <section className="section bg-light-gray" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 style={{ fontSize: '3rem', color: 'var(--neutral-black)', marginBottom: '1.5rem' }}>La Obra <span className="text-gradient">Completa</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-dark-gray)', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
            Aprecia el díptico en su formato monumental. Dos realidades que convergen para narrar una misma historia: la de una naturaleza resiliente que merece ser admirada y preservada en absoluta convivencia con nuestros espacios cotidianos.
          </p>

          <div className="full-artwork-container">
            <motion.div
              className="full-panel"
              whileHover={{ scale: 1.02, y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.4 }}
            >
              <img src="/image3.webp" alt="Panel Izquierdo Completo" />
            </motion.div>
            <motion.div
              className="full-panel"
              whileHover={{ scale: 1.02, y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.4 }}
            >
              <img src="/image2.webp" alt="Panel Derecho Completo" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: DETALLE TÉCNICO */}
      <section className="section bg-dark">
        <motion.div className="technical-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div>
            <motion.h2 variants={fadeUp} style={{ fontSize: '3rem', marginBottom: '2rem' }}>
              Detalle <span className="text-gradient">Técnico</span>
            </motion.h2>

            <motion.ul className="tech-list" variants={staggerContainer}>
              <motion.li variants={fadeUp}>
                <Leaf className="tech-icon" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--primary-gold)' }}>Soporte y Técnica</strong>
                  Lienzo de algodón 100% (360 g/m²). Técnica mixta (acuarela, acrílico, tinta) sobre lienzo.
                </div>
              </motion.li>
              <motion.li variants={fadeUp}>
                <Info className="tech-icon" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--primary-gold)' }}>Estructura y Acabado</strong>
                  Bastidor de madera de pino certificada (4 cm). Barniz protector mate/UV (opcional satinado). Bordes laterales pintados en blanco continuo o extensión del fondo.
                </div>
              </motion.li>
              <motion.li variants={fadeUp}>
                <Maximize className="tech-icon" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--primary-gold)' }}>Sistema de Enmarcado</strong>
                  Marco flotante (floating frame) de aluminio o madera lacada en negro mate. Perfil visible de 4 cm y separación (shadow gap) de 4-5 mm entre lienzo y marco.
                </div>
              </motion.li>
              <motion.li variants={fadeUp}>
                <Target className="tech-icon" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--primary-gold)' }}>Instalación</strong>
                  Sistema de colgado Z-Clip incluido (instalación profesional sin cables visibles). Protección trasera con papel kraft sellado.
                </div>
              </motion.li>
            </motion.ul>
          </div>

          <motion.div className="tech-image-container hover-impact" variants={fadeUp}>
            <img src="/image1.webp" alt="Detalle técnico - Textura y marco negro" className="base-img" />
            <div className="hover-overlay">
              <span className="overlay-text">Textura Mixta y Marco Flotante</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 3: DIMENSIONES */}
      <section className="section dimensions-section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--neutral-black)' }}>Dimensiones y <span className="text-gradient">Espacio</span></h2>
        </motion.div>

        <motion.div className="dim-cards" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="dim-card hover-lift" variants={fadeUp}>
            <Ruler size={36} color="var(--primary-turquoise)" />
            <div className="dim-value">Panel Individual</div>
            <p><strong>Totales (con marco):</strong><br /> 50 cm x 120 cm x 6 cm</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Lienzo visible interno:</strong><br /> 30 cm x 100 cm</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Margen perimetral:</strong><br /> 8-10 cm</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Peso estimado:</strong><br /> 3.5 - 4.5 kg</p>
          </motion.div>

          <motion.div className="dim-card hover-lift" variants={fadeUp}>
            <Maximize size={36} color="var(--primary-gold)" />
            <div className="dim-value">Díptico Completo</div>
            <p><strong>Ancho total instalado:</strong><br /> 105-110 cm (incl. separación de 5-10 cm)</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Alto total:</strong><br /> 120 cm</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Peso total:</strong><br /> 7-9 kg</p>
          </motion.div>

          <motion.div className="dim-card hover-lift" variants={fadeUp}>
            <Target size={36} color="var(--primary-green)" />
            <div className="dim-value">Pared Recomendada</div>
            <p><strong>Mínimo:</strong><br /> 130 cm ancho x 140 cm alto</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Óptimo:</strong><br /> 150 cm ancho x 160 cm alto</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4: POSIBLES APLICACIONES */}
      <section className="section bg-light-gray">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--neutral-black)', marginBottom: '1rem' }}>Sectores de <span className="text-gradient">Aplicación</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--neutral-gray)', maxWidth: '600px', margin: '0 auto' }}>
            Perfecto equilibrio entre diseño, bienestar estético y propósito ambiental.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mockup-container hover-impact">
          <img src="/image4.webp" alt="Mockup en Entorno Corporativo" className="base-img" />
          <div className="hover-overlay pointer-none"></div>
        </motion.div>

        <motion.div className="app-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3><Building2 className="tech-icon" /> Sector Corporativo</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} className="check-icon" /> Recepciones y lobbies de oficinas</li>
              <li><CheckCircle size={18} className="check-icon" /> Salas de juntas ejecutivas</li>
              <li><CheckCircle size={18} className="check-icon" /> Espacios de coworking</li>
              <li><CheckCircle size={18} className="check-icon" /> Pasillos y áreas de transición</li>
              <li><CheckCircle size={18} className="check-icon" /> Oficinas de diseño y sostenibilidad</li>
              <li><CheckCircle size={18} className="check-icon" /> Empresas tech con enfoque ESG</li>
            </ul>
          </motion.div>

          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3><Hotel className="tech-icon" /> Hospitalidad</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} className="check-icon" /> Hoteles boutique eco-friendly</li>
              <li><CheckCircle size={18} className="check-icon" /> Resorts y spas wellness</li>
              <li><CheckCircle size={18} className="check-icon" /> Restaurantes de cocina tropical</li>
              <li><CheckCircle size={18} className="check-icon" /> Áreas de check-in</li>
              <li><CheckCircle size={18} className="check-icon" /> Suites premium</li>
            </ul>
          </motion.div>

          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3><GraduationCap className="tech-icon" /> Educativo y Cultural</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} className="check-icon" /> Universidades e investigación</li>
              <li><CheckCircle size={18} className="check-icon" /> Museos de historia natural</li>
              <li><CheckCircle size={18} className="check-icon" /> Bibliotecas modernas</li>
              <li><CheckCircle size={18} className="check-icon" /> Centros de conservación</li>
            </ul>
          </motion.div>

          <motion.div className="app-sector hover-lift" variants={fadeUp}>
            <h3><HeartPulse className="tech-icon" /> Bienestar y Retail</h3>
            <ul className="app-list">
              <li><CheckCircle size={18} className="check-icon" /> Clínicas y áreas de espera</li>
              <li><CheckCircle size={18} className="check-icon" /> Centros de psicología</li>
              <li><CheckCircle size={18} className="check-icon" /> Gimnasios y studios de yoga</li>
              <li><CheckCircle size={18} className="check-icon" /> Tiendas orgánicas</li>
              <li><CheckCircle size={18} className="check-icon" /> Galerías de arte</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 5: GARANTÍA */}
      <section className="guarantee-banner">
        <ShieldCheck size={64} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Garantía de Calidad</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.9 }}>
          2 años contra defectos de fabricación.<br />
          Garantía de estabilidad cromática por 10 años (con luz UV controlada).
        </p>
        <a href="#" className="btn-primary">
          Contactar para Cotización
        </a>
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
      </footer>
    </div>
  )
}

export default Player2
