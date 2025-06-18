import React from 'react';
import '../../styles/HomePage.css';
import Inspiracion from '../../pages/inspiracion/Inspiracion';
import Presentacion from '../../pages/presentacion/Presentacion';

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
    </>

  );
}

export default HomePage;