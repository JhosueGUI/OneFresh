// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Carousel from '../Carousel/Carousel';

function HomePage() {
  // Variantes para animaciones de entrada del texto
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variantes para animaciones de entrada de las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Cada hijo animará con un retraso
      },
    },
  };

  return (
    <>
      <Carousel />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ padding: '3em', textAlign: 'center'}}
      >

        <motion.h1
          variants={textVariants}
          style={{ fontSize: '3em', marginBottom: '0.5em', color: '#333' }}
        >
          Bienvenido a Nuestra Página Moderna
        </motion.h1>
        <motion.p
          variants={textVariants}
          style={{ fontSize: '1.2em', maxWidth: '800px', margin: '0 auto 2em auto', color: '#555' }}
        >
          Explora una experiencia interactiva y visualmente atractiva, construida con las últimas tecnologías web.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }} // Escala un poco al pasar el ratón
          whileTap={{ scale: 0.95 }}   // Escala un poco al hacer clic
          style={{ display: 'inline-block', marginBottom: '3em' }} // Contenedor para el botón
        >
          <Button label="Descubre Más" icon="pi pi-arrow-right" iconPos="right"
            className="p-button-lg p-button-primary" // Clases de PrimeReact para un botón grande y primario
            style={{
              background: 'linear-gradient(to right, #6366F1, #8B5CF6)', // Degradado de color
              border: 'none',
              padding: '1em 2em',
              fontSize: '1.1em',
              borderRadius: '25px', // Bordes redondeados
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2em', // Espacio entre tarjetas
          }}
        >
          {/* Primera Tarjeta */}
          <motion.div variants={cardVariants}>
            <Card
              title="Diseño Intuitivo"
              subTitle="Experiencia de usuario fluida"
              style={{ width: '20em', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
              footer={
                <Button label="Más Detalles" icon="pi pi-plus" className="p-button-text" />
              }
            >
              <p>
                Nuestra interfaz está diseñada para ser fácil de usar y agradable a la vista, garantizando una navegación sin esfuerzo.
              </p>
            </Card>
          </motion.div>

          {/* Segunda Tarjeta */}
          <motion.div variants={cardVariants}>
            <Card
              title="Animaciones Suaves"
              subTitle="Micro-interacciones dinámicas"
              style={{ width: '20em', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
              footer={
                <Button label="Ver Animaciones" icon="pi pi-external-link" className="p-button-text" />
              }
            >
              <p>
                Cada elemento cobra vida con transiciones elegantes y efectos visuales que mejoran la interacción.
              </p>
            </Card>
          </motion.div>

          {/* Tercera Tarjeta */}
          <motion.div variants={cardVariants}>
            <Card
              title="Rendimiento Óptimo"
              subTitle="Carga rápida y fluidez"
              style={{ width: '20em', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
              footer={
                <Button label="Aprender Más" icon="pi pi-angle-double-right" className="p-button-text" />
              }
            >
              <p>
                Desarrollada con Vite, nuestra página ofrece un rendimiento excepcional y tiempos de carga mínimos.
              </p>
            </Card>
          </motion.div>
        </motion.div>

      </motion.div>
    </>

  );
}

export default HomePage;