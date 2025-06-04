// src/components/Footer/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222', // Color de fondo un poco más oscuro
      color: 'white',
      textAlign: 'center',
      padding: '1.5em 0',
      marginTop: 'auto', // Asegura que el footer se empuje hacia abajo
    }}>
      <p>&copy; 2025 Mi Página Moderna. Todos los derechos reservados.</p>
      <div style={{ marginTop: '0.5em' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 0.5em' }}>Privacidad</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 0.5em' }}>Términos</a>
      </div>
    </footer>
  );
}

export default Footer;