import React from 'react';
import { motion } from 'framer-motion';


function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: '100%',
        minHeight: '1000px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      
      {/* Overlay transparente */}
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

      {/* Contenido del Hero (sin menú) */}
      <div style={{ zIndex: 1, textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bienvenido a One Fresh</h1>
        <p style={{ fontSize: '1.5rem' }}>Descubre nuestros productos frescos</p>
      </div>
    </motion.div>
  );
}

export default HeroBanner;