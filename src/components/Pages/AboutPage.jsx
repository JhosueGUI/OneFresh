// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Panel } from 'primereact/panel';

function AboutPage() {
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ padding: '3em', maxWidth: '900px', margin: '3em auto' }}
    >
      <Panel header="Acerca de Nosotros" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <h2 style={{ marginBottom: '1em', color: '#444' }}>Nuestra Misión</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5em' }}>
          En este proyecto, nos dedicamos a construir experiencias web de vanguardia.
          Creemos que el diseño moderno, la interactividad fluida y un rendimiento
          excepcional son clave para una presencia en línea impactante.
        </p>
        <h2 style={{ marginBottom: '1em', color: '#444' }}>Nuestro Equipo</h2>
        <p style={{ lineHeight: '1.6' }}>
          Somos un equipo apasionado de desarrolladores y diseñadores enfocados en crear
          soluciones innovadoras que no solo funcionan, sino que también deleitan a los usuarios.
        </p>
      </Panel>
    </motion.div>
  );
}

export default AboutPage;