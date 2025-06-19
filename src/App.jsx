import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import Footer from './components/Footer/Footer';
import TopBanner from './components/Header/TopBanner';
import HeroBanner from './components/Header/HeroBanner';
import 'leaflet/dist/leaflet.css';
import HomePage from './components/Pages/HomePage';
import GaleriaPage from './components/Pages/GaleriaPage';
import ScrollToTop from './components/Navegador/ScrollToTop';
import Promociones from './components/Pages/Promociones';


<a href="https://lordicon.com/">Icons by Lordicon.com</a>
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      template: (item, options) => (
        <Link to="/" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Nosotros',
      icon: 'pi pi-info-circle',
      template: (item, options) => (
        <Link to="/nosotros" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Promociones',
      icon: 'pi pi-shopping-cart',
      template: (item, options) => (
        <Link to="/promociones" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Galería',
      icon: 'pi pi-images',
      template: (item, options) => (
        <Link to="/galeria" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      template: (item, options) => (
        <Link to="/contacto" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
  ];

  const logoWebP = '/images/one-fresh-logo.webp';

  const startLogo = (
    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5em', fontWeight: 'bold', marginRight: '1em', display: 'flex', alignItems: 'center' }}>
      <img src={logoWebP} alt="One Fresh Logo" style={{ height: '60px', marginRight: '10px' }} />
    </Link>
  );

  const menubarHoverStyles = `
    .menubar-container-hover:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
    .menubar-container-hover:hover .p-menuitem-link,
    .menubar-container-hover:hover .p-menuitem-text,
    .menubar-container-hover:hover .pi,
    .menubar-container-hover:hover .p-button {
      color: #004AAD !important;
    }
    .menubar-container-hover:hover .p-menubar-start a {
      color: #004AAD !important;
    }
    .menubar-container-hover:hover .p-button-secondary {
      background-color: #004AAD !important;
      border-color: #004AAD !important;
      color: white !important;
    }
    .menubar-container-hover .p-button-secondary {
      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }

    .whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1001;
      cursor: pointer;
    }
  `;

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = menubarHoverStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <TopBanner />

        <div
          className="menubar-container-hover"
          style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: scrolled ? 'rgb(255, 255, 255)' : 'transparent',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            backdropFilter: scrolled ? 'blur(5px)' : 'none',
          }}
        >
          <Menubar
            model={items}
            start={startLogo}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              borderRadius: '0',
              border: 'none',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>

        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/51908906872?text=Hola,%20quiero%20más%20información%20sobre%20sus%20productos"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/iconos/what/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: '60px', height: '60px' }}
          />
        </a>
      </div>
    </Router>
  );
}

export default App;
