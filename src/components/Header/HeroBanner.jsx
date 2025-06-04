// src/components/HeroBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

const logoWebP = '/images/one-fresh-logo.webp';
const heroBgImage = '/images/hero-banner-bg.webp';

function HeroBanner() {
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
      label: 'Productos',
      icon: 'pi pi-shopping-cart',
      template: (item, options) => (
        <Link to="/productos" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Ventas Corporativas',
      icon: 'pi pi-building',
      template: (item, options) => (
        <Link to="/ventas-corporativas" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={item.icon} style={{ marginRight: '.5em' }}></span>
          <span className="p-menuitem-text">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Boletín',
      icon: 'pi pi-send',
      template: (item, options) => (
        <Link to="/boletin" className={options.className} style={{ textDecoration: 'none', color: 'inherit' }}>
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

  const startLogo = (
    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5em', fontWeight: 'bold', marginRight: '1em', display: 'flex', alignItems: 'center' }}>
      <img
        src={logoWebP}
        alt="One Fresh Logo"
        style={{ height: '60px', marginRight: '10px' }}
      />
    </Link>
  );
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '1000px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        color: 'white',
        background: 'none',
      }}
    >
      {/* Hero Banner Background Image */}
      <img
        src={heroBgImage}
        alt="Hero Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      />
      {/* Overlay: Transparent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          zIndex: -1,
        }}
      ></div>

      {/* Navigation Menubar */}
      <div className="menubar-container-hover"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 0,
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        <Menubar model={items} start={startLogo}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '1em 2em',
            borderRadius: '0',
            border: 'none',
            width: '100%',
            // Add these styles to center the items
            display: 'flex', // Ensure flexbox is active
            justifyContent: 'center', // Center items horizontally
          }}
        />
      </div>
    </motion.div>
  );
}

export default HeroBanner;