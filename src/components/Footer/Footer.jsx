import React from 'react';
import '../../styles/Footer.css'; // Assuming you have a CSS file for styles
const logoWebP = '/images/one-fresh-logo.webp';
const telefonoWebP = '/images/footer/telefono.webp';

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e0e0e0', paddingTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="contenedor" style={{ display: 'flex', justifyContent: 'space-between', width: '80%', gap: '1.5em' }}>
          {/* Logo y eslogan */}
          <div className='logo'>
            <img
              className="logo"
              src={logoWebP}
              alt="One Fresh Logo"
              style={{ height: '100px', marginRight: '10px' }}
            />
          </div>

          {/* Lista de Exámenes */}
          <div className='examen'> 
            <p style={{fontSize:'20px',fontWeight:'500',color:'#332F30'}}>Contenido</p>
            <p style={{ display: 'flex',color:'#332F30' }}><a href="/nosotros" style={{ textDecoration: 'none' }}>Nuestras Presentaciones</a></p>
            <p style={{ display: 'flex',color:'#332F30' }}><a href="/nosotros" style={{ textDecoration: 'none' }}>Nuestras Inspiración</a></p>
            <p style={{ display: 'flex',color:'#332F30' }}><a href="/nosotros" style={{ textDecoration: 'none' }}>Nuestras Promociones</a></p>
          </div>

          {/* Acerca de Nosotros */}
          <div className='acerca'>
            <p style={{fontSize:'20px',fontWeight:'500',color:'#332F30'}}>Acerca de Nosotros</p>
            <p style={{ display: 'flex',color:'#332F30' }}><img src="/iconos/listos/admin.png" alt="Telefono" style={{ width: '25px', height: '25px', marginRight: '8px' }} /><a href="/nosotros" style={{ textDecoration: 'none' }}>¿Quiénes somos?</a></p>
          </div>

          {/* Sedes */}
          <div className='sede'> 
            <p style={{fontSize:'20px',fontWeight:'500',color:'#332F30'}}>Sede</p>
            <p style={{ display: 'flex',color:'#332F30' }}><img src="/iconos/listos/ubicacion.png" alt="Telefono" style={{ width: '25px', height: '25px', marginRight: '8px' }} />Calle Piura Mz B Lt 8-A  Lurigancho – Lima</p>
            <p><a href="/contacto" style={{ textDecoration: 'none' }}>Ver más...</a></p>
          </div>

          {/* Contacto */}
          <div className='contacto'>
            <p style={{fontSize:'20px',fontWeight:'500',color:'#332F30'}}>Contacto</p>
            <p style={{ display: 'flex',color:'#332F30' }}><img src="/iconos/listos/telefono2.png" alt="Telefono" style={{ width: '25px', height: '25px', marginRight: '8px' }} /> (51) 908 906 872</p>
            <p style={{ display: 'flex',color:'#332F30'}}><img src="/iconos/listos/correo2.png" alt="Correo" style={{ width: '25px', height: '25px', marginRight: '8px' }} /> ventas@jrprodesa.pe</p>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div style={{ display: 'flex', backgroundColor: '#06b6d4', padding: '1em 0', textAlign: 'center', marginTop: '2em', justifyContent: 'center' }}>
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