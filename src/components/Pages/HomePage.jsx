import React from 'react';
import '../../styles/HomePage.css';
import Presentacion from '../../pages/presentacion/Presentacion';
import Novedades from '../../pages/novedades/Novedades';
import Inspiracion from '../../pages/inspiracion/Inspiracion';

function HomePage() {
  return (
    <>
      <div className="home-page-container">
        <img
          src="/images/fondo3.webp"
          alt="Background"
          className="responsive-background-image"
        />
      </div>
      <Presentacion/>

      <Inspiracion/>
      <Novedades/>
    </>

  );
}

export default HomePage;