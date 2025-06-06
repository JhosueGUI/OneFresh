// src/pages/HomePage.jsx
import React from 'react';
import Carousel from '../Secciones/Carousel/Carousel';
import CircularGallery from '../Secciones/Promociones/CircularGallery ';
import Nosotros from '../Secciones/Nosotros/Nosotros';
import Beneficios from '../Secciones/Beneficios/Beneficios';

function HomePage() {
  return (
    <>
      <div style={{display:'flex', flexDirection:'column', gap:'150px'}} >
        <Nosotros />
        <div style={{ height: '600px' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <div style={{marginTop:'200px'}}>
        <Beneficios/>
        </div>
        <Carousel /></div>


    </>
  );
}

export default HomePage;