import React from 'react';
const logoWebP = '/images/one-fresh-logo.webp';
const telefonoWebP = '/images/footer/telefono.webp';

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e0e0e0', paddingTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="contenedor" style={{ display: 'flex', justifyContent: 'space-between', width: '80%', gap: '1.5em' }}>
          {/* Logo y eslogan */}
          <div >
            <img
              src={logoWebP}
              alt="One Fresh Logo"
              style={{ height: '60px', marginRight: '10px' }}
            />
            <p style={{ color: '#004AAD' }}>Estamos bien todos.</p>
          </div>

          {/* Lista de Exámenes */}
          <div >
            <h4>Lista de Exámenes</h4>
            <p>Hemograma</p>
            <p>Descarte de VPH</p>
            <p><a href="#" style={{ textDecoration: 'underline' }}>Ver más...</a></p>
          </div>

          {/* Acerca de Nosotros */}
          <div >
            <h4>Acerca de Nosotros</h4>
            <p><a href="#" style={{ textDecoration: 'underline' }}>¿Quiénes somos?</a></p>
          </div>

          {/* Sedes */}
          <div >
            <h4>Sedes</h4>
            <p>Ate</p>
            <p>Callao</p>
            <p>Comas</p>
            <p><a href="#" style={{ textDecoration: 'underline' }}>Ver más...</a></p>
          </div>

          {/* Contacto */}
          <div >
            <h4>Contacto</h4>
            <p>📞 (01) 652-6328</p>
            <p>✉️ contacto@lab-u.org</p>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div style={{ display: 'flex', backgroundColor: 'rgb(0, 106, 255)', padding: '1em 0', textAlign: 'center', marginTop: '2em', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5em' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Términos y condiciones</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Políticas de privacidad</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Resultados</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>©OneFresh, Todos los derechos reservados.</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;