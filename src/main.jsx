// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css"
// Importa el tema de PrimeReact que prefieras (ej. 'lara-light-cyan')
// Puedes explorar otros temas en la documentación de PrimeReact.
import 'primereact/resources/themes/lara-light-cyan/theme.css';
// Importa los estilos base de PrimeReact
import 'primereact/resources/primereact.min.css';
// Importa los estilos de los iconos de PrimeIcons (para usar iconos como 'pi pi-check')
import 'primeicons/primeicons.css';
// Glide.js core styles - THIS IS NECESSARY for Glide to work
import '@glidejs/glide/dist/css/glide.core.min.css';
// Optionally, you might use the theme.css if you want more default styling
// import '@glidejs/glide/dist/css/glide.theme.min.css'; // Generally not needed for highly custom designs
// If you want default arrows/bullets from Glide, this would be helpful.
// For your design, we'll make custom arrows.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);