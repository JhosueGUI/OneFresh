// src/components/TopBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';

function TopBanner() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        backgroundColor: '#1685f9', // Usando el azul principal de tu paleta
        color: 'white',
        padding: '8px 20px',
        fontSize: '0.9em',
        position: 'relative',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between', // ¡AQUÍ ESTÁ EL CAMBIO CLAVE! Distribuye los elementos
        alignItems: 'center',
        flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
      }}
    >
      {/* Información de contacto: Correo y Teléfono */}
      {/* Este div actuará como el primer elemento, a la izquierda */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="mailto:ventas@jrprodesa.pe" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <i className="pi pi-envelope" style={{ marginRight: '5px', fontSize: '1.1em' }}></i>
          <span style={{ whiteSpace: 'nowrap' }}>ventas@jrprodesa.pe</span>
        </a>
        <a href="tel:+51908906872" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <i className="pi pi-phone" style={{ marginRight: '5px', fontSize: '1.1em' }}></i>
          <span style={{ whiteSpace: 'nowrap' }}>+51 908 906 872</span>
        </a>
      </div>

      {/* Iconos de Redes Sociales */}
      {/* Este div actuará como el segundo (y último) elemento, a la derecha */}
      <div style={{ display: 'flex', gap: '15px' }}>
        {/* Icono de Facebook */}
        <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer"
           style={{ color: 'white', fontSize: '1.4em', transition: 'color 0.3s' }}>
          <i className="pi pi-facebook"></i>
        </a>

        {/* Icono de TikTok (placeholder) */}
        <a href="https://www.tiktok.com/@tuusuario" target="_blank" rel="noopener noreferrer"
           style={{ color: 'white', fontSize: '1.4em', transition: 'color 0.3s' }}>
          <i className="pi pi-compass"></i> {/* Considera usar un SVG si quieres el icono exacto */}
        </a>
      </div>
    </motion.div>
  );
}

export default TopBanner;