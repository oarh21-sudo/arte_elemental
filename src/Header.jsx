import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './App.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // Smooth scroll directly if already on home
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
    }
  };

  return (
    <header className={`global-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
          <img src="/Web_LogoV1.png" alt="Arte Elemental Logo" className="logo-image" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <button onClick={() => handleNavClick('obras')} className="nav-btn">Obras</button>
          <button onClick={() => handleNavClick('manifiesto')} className="nav-btn">Manifiesto</button>
          <a href="#" className="nav-btn">Cotizar</a>
        </nav>

        <div className="header-actions">
          <a href="#" className="btn-header-cta">
            Cotizar Obra
          </a>
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            <button onClick={() => handleNavClick('obras')} className="mobile-nav-btn">Obras</button>
            <button onClick={() => handleNavClick('manifiesto')} className="mobile-nav-btn">Manifiesto</button>
            <a href="#" className="mobile-nav-btn">Cotizar</a>
            <a href="#" className="mobile-nav-btn mobile-cta">Cotizar Obra</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
