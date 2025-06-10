import React, { useState, useEffect } from 'react';
import Carousel from '../Secciones/Carousel/Carousel';
import CircularGallery from '../Secciones/Promociones/CircularGallery ';
import Nosotros from '../Secciones/Nosotros/Nosotros';
import Beneficios from '../Secciones/Beneficios/Beneficios';
import Listos from '../Secciones/Listos/Listos';

function HomePage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      // Calcula la posición relativa (0.5 es el centro)
      const relativeX = (e.clientX / innerWidth) - 0.5; // -0.5 a 0.5
      const relativeY = (e.clientY / innerHeight) - 0.5; // -0.5 a 0.5

      const factor = 40; // Ajusta según el efecto que desees
      setOffset({
        x: -relativeX * factor,
        y: -relativeY * factor
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
        <div
          style={{
            height: '100vh',
            background: 'linear-gradient(to bottom, #1685f9, #ffffff)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative' // necesario para posicionar el overlay
          }}
        >
          <span style={{ fontSize: '20px', fontWeight: '600' }}>
            El agua no es nada más que vida.
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 'bold' }}>
            Gran sabor, fresco y consistente
          </h1>
          <img
            src="/images/fondo.webp"
            alt="One Fresh Logo"
            style={{ marginBottom: '20px', zIndex: '2' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              marginTop: '190px', // ajusta la posición vertical
              left: 0,
              width: '100%',
              height: '400px',
              pointerEvents: 'none', // para no interceptar clics si no quieres
              zIndex: 1 // ajusta según tu diseño
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

        <Nosotros />
        <div style={{ height: '600px' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <div style={{ marginTop: '200px' }}>
          <Beneficios />
        </div>
        <Carousel />
      </div>
      <div style={{ marginTop: '200px' }}>
        <Listos />
      </div>
    </>
  );
}

export default HomePage;
