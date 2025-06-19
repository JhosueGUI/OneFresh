import React from 'react';
import ChromaGrid from '../../pages/galeria/ChromaGrid';

function GaleriaPage() {
  return (
    <div style={{backgroundColor: '#f0f0f0', padding: '20px',textAlign: 'center'}}>
      <h1>Galería de <span style={{ color: '#06b6d4' }}>Imágenes</span></h1>
      {/* Pasamos items como undefined o un array vacío si quieres usar el demo */}
      <ChromaGrid items={[]} />
    </div>
  );
}

export default GaleriaPage;
