import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../Secciones/Carousel/Carousel';
import CircularGallery from '../Secciones/Promociones/CircularGallery ';
import Nosotros from '../Secciones/Nosotros/Nosotros';
import Beneficios from '../Secciones/Beneficios/Beneficios';
import Listos from '../Secciones/Listos/Listos';

// Animaciones para secciones
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animaciones solo para texto
const textFadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function HomePage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const relativeX = (e.clientX / innerWidth) - 0.5;
      const relativeY = (e.clientY / innerHeight) - 0.5;
      const factor = 40;

      setOffset({
        x: -relativeX * factor,
        y: -relativeY * factor
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
        {/* Hero Section */}
        <div
          style={{
            height: '100vh',
            background: 'linear-gradient(to bottom, #1685f9, #ffffff)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            gap: '40px',
          }}
        >
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',zIndex:2}}>
            <motion.span
              variants={textFadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              style={{ fontSize: '30px', fontWeight: '600', color: '#a1e1e8', marginBottom: '20px' }}
            >
              El agua no es nada más que vida.
            </motion.span>

            <motion.span
              variants={textFadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              style={{ color: '#ffffff', fontSize: '48px', fontWeight: 'bold' }}
            >
              Gran sabor, fresco y consistente
            </motion.span>
          </div>


          <img
            src="/images/fondo.webp"
            alt="One Fresh Logo"
            style={{ marginBottom: '20px', zIndex: '2' }}
          />

          {/* Ice Parallax */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              marginTop: '220px',
              left: 0,
              width: '100%',
              height: '400px',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            <img
              src="/images/hielo.webp"
              alt="Ice 1"
              className="ice2"
              style={{
                marginRight: '-130px',
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.1s linear'
              }}
            />
            <img
              src="/images/hielo.webp"
              alt="Ice 2"
              className="ice2"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.1s linear'
              }}
            />
          </div>
        </div>

        {/* Nosotros Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Nosotros />
        </motion.div>

        {/* CircularGallery Section */}
        <motion.div
          style={{ height: '600px' }}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </motion.div>

        {/* Beneficios Section */}
        <motion.div
          style={{ marginTop: '200px' }}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Beneficios />
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Carousel />
        </motion.div>
      </div>

      {/* Listos Section */}
      <motion.div
        style={{ marginTop: '200px' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Listos />
      </motion.div>
    </>
  );
}

export default HomePage;
