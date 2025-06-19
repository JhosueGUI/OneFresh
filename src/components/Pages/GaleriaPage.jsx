import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/ContactPage.css';
import ChromaGrid from '../../pages/galeria/ChromaGrid';
function GaleriaPage() {
  const slideUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.5 },
  };

  return (
    <div>
      {/* Sección con imagen de fondo y texto */}
      <div style={{
        position: 'relative',
        width: '100%',
        backgroundImage: 'url(/images/galeria/fondo78.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
      }}>
        <motion.div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          {...slideUp}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span style={{
            display: 'flex',
            flexDirection: 'column',
            fontWeight: 'bold',
            fontSize: '40px',
            marginBottom: '10px',
            textAlign: 'left',
            color: '#000',
          }}>
            ¡Nuestra Galeria<span style={{ color: '#06b6d4' }}> de Fotos!</span>
          </span>
          <span style={{ textAlign: 'justify', color: '#000' }}>
            Un espacio donde capturamos momentos especiales, experiencias únicas y los detalles que nos representan.
            Explora cada imagen y descubre la esencia de lo que somos.
          </span>
        </motion.div>
      </div>

      {/* Sección adicional con título y 3 imágenes grandes */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        {/* Pasamos items como undefined o un array vacío si quieres usar el demo */}
        <ChromaGrid items={[]} />
      </div>
    </div>
  );
}

export default GaleriaPage;
