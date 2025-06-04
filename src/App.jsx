// src/App.jsx
import React, { useEffect } from 'react'; // Asegúrate de importar useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import Footer from './components/Footer/Footer';
import TopBanner from './components/Header/TopBanner';
import HeroBanner from './components/Header/HeroBanner';

function App() {
  // CSS para el efecto hover del contenedor del Menubar
  const menubarHoverStyles = `
    /* Estilo para el contenedor del Menubar cuando el cursor está encima */
    .menubar-container-hover:hover {
      background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco (ajusta opacidad si quieres semi-transparente) */
    }

    /* Cambiar el color del texto y los iconos dentro del Menubar cuando el contenedor padre está en hover */
    .menubar-container-hover:hover .p-menuitem-link,
    .menubar-container-hover:hover .p-menuitem-text,
    .menubar-container-hover:hover .pi,
    .menubar-container-hover:hover .p-button {
      color: #004AAD !important; /* Texto y botones azules */
    }

    /* Asegurar que el logo también cambie de color si es un texto (no una imagen) */
    /* Si tu logo es una imagen, esta regla no le afectará, pero si es un texto, sí. */
    .menubar-container-hover:hover .p-menubar-start a {
      color: #004AAD !important;
    }

    /* Ajustar el botón de registrarse al hacer hover en el contenedor */
    .menubar-container-hover:hover .p-button-secondary {
      background-color: #004AAD !important; /* Fondo del botón azul */
      border-color: #004AAD !important;
      color: white !important; /* Texto del botón blanco */
    }
    .menubar-container-hover .p-button-secondary {
      transition: background-color 0.3s, color 0.3s, border-color 0.3s; /* Transición para el botón */
    }
  `;

  // useEffect para inyectar los estilos CSS en el head del documento
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = menubarHoverStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar


  return (
    <Router>
      {/* Contenedor principal para el layout flexbox */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <TopBanner />
        {/* El HeroBanner ya contiene el Menubar */}
        <HeroBanner />

        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<HomePage />} /> {/* Assuming /nosotros maps to AboutPage */}
            <Route path="/productos" element={<HomePage />} />
            <Route path="/ventas-corporativas" element={<HomePage />} />
            <Route path="/boletin" element={<HomePage />} />
            <Route path="/galeria" element={<HomePage />} />
            <Route path="/contacto" element={<HomePage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;