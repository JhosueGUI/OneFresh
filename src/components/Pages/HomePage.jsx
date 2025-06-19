import React, { useEffect, useState } from 'react';
import '../../styles/HomePage.css';
import Presentacion from '../../pages/presentacion/Presentacion';
import Novedades from '../../pages/novedades/Novedades';
import Inspiracion from '../../pages/inspiracion/Inspiracion';
import Promocion from '../../pages/promocion/promocion';

function HomePage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    '/images/fondo3.webp',
    '/images/fondo4.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <>
      <div className="home-page-container">
        <img
          src={backgrounds[backgroundIndex]}
          alt="Background"
          className="responsive-background-image"
        />
      </div>
      <Presentacion />
      <Inspiracion />
      <Novedades />
      <Promocion />
    </>
  );
}

export default HomePage;
