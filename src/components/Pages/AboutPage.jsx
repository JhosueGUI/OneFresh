// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Panel } from 'primereact/panel';

function AboutPage() {


  return (
    <div className="main">
      <div className="div" style={{ background: 'rgb(220, 242, 250)', height: '500px', display: 'flex', alignItems: 'center', gap: '20px', padding: '0 10%' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          background: 'rgb(25, 151, 197)',
          width: '50%',
          height: '60%'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row', // <-- cambio clave aquí
            alignItems: 'center',
            marginBottom: '20px',
            width: '100%'
          }}>
            <img
              src="/iconos/nosotros/1.svg"
              alt="One Fresh"
              style={{ width: '60px', height: '60px', marginRight: '20px' }} // Ajusta tamaño según necesidad
            />
            <span style={{ fontSize: '40px', fontWeight: '600', color: 'white' }}>
              Misión
            </span>
          </div>

          {/* Texto debajo */}
          <span style={{ textAlign: 'justify', color: 'white' }}>
            Ofrecer productos con los más altos estándares de calidad que satisfagan a nuestros clientes, con un equipo humano motivado por sus principios éticos para así proyectar una imagen de solidez y responsabilidad en el mercado local, regional y nacional.
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          background: 'rgb(25, 151, 197)',
          width: '50%',
          height: '60%'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row', // <-- cambio clave aquí
            alignItems: 'center',
            marginBottom: '20px',
            width: '100%'
          }}>
            <img
              src="/iconos/nosotros/2.svg"
              alt="One Fresh"
              style={{ width: '60px', height: '60px', marginRight: '20px' }} // Ajusta tamaño según necesidad
            />
            <span style={{ fontSize: '40px', fontWeight: '600', color: 'white' }}>
              Visión
            </span>
          </div>

          {/* Texto debajo */}
          <span style={{ textAlign: 'justify', color: 'white' }}>
            Ser una empresa líder a nivel nacional en el mercado de agua tratada y embotellada, siendo la calidad un factor trascendental en nuestra operación, distribución y servicio integral.
          </span>
        </div>



      </div>
      <div className="2" >
        <img src="/iconos/nosotros/3.svg" alt="One Fresh" style={{ width: '100%', height: '100%', padding: '10%' }} />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '48px', fontWeight: '600' }}>Nuestros<span style={{ color: '#1685f9' }}>Valores</span> </span>
        </div>
        <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '40px',
  gap: '20px',
  position: 'relative',
}}>
  {/* Línea roja horizontal */}
  <div style={{
    position: 'absolute',
    top: '50px',
    left: '0',
    right: '0',
    height: '2px',
    backgroundColor: '#E53935',
    zIndex: 0,
  }}></div>

  {/* 1 - Somos honestos */}
  <div style={{
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1
  }}>
    <div style={{
      backgroundColor: '#E53935',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      marginBottom: '20px',
      position: 'absolute',
      top: '-30px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <img src="/iconos/honestidad.svg" alt="Somos honestos" style={{ width: '30px', height: '30px' }} />
    </div>
    <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Somos honestos</h3>
    <p>Entender al otro y sus necesidades fortalece nuestras relaciones.</p>
  </div>

  {/* 2 - Nos gustan los retos */}
  <div style={{
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1
  }}>
    <div style={{
      backgroundColor: '#E53935',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      marginBottom: '20px',
      position: 'absolute',
      top: '-30px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <img src="/iconos/retos.svg" alt="Nos gustan los retos" style={{ width: '30px', height: '30px' }} />
    </div>
    <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Nos gustan los retos</h3>
    <p>Enfrentamos los desafíos con gusto y tenacidad.</p>
  </div>

  {/* 3 - Somos empáticos */}
  <div style={{
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1
  }}>
    <div style={{
      backgroundColor: '#E53935',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      marginBottom: '20px',
      position: 'absolute',
      top: '-30px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <img src="/iconos/empatia.svg" alt="Somos empáticos" style={{ width: '30px', height: '30px' }} />
    </div>
    <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Somos empáticos</h3>
    <p>Ser honestos genera confianza que es la base de todas las relaciones.</p>
  </div>

  {/* 4 - Bien común */}
  <div style={{
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1
  }}>
    <div style={{
      backgroundColor: '#E53935',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      marginBottom: '20px',
      position: 'absolute',
      top: '-30px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <img src="/iconos/bien-comun.svg" alt="Bien común" style={{ width: '30px', height: '30px' }} />
    </div>
    <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Bien común</h3>
    <p>Nuestros esfuerzos adquiere sentido cuando contempla el beneficio de todos.</p>
  </div>

  {/* 5 - Primero el cliente */}
  <div style={{
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1
  }}>
    <div style={{
      backgroundColor: '#E53935',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      marginBottom: '20px',
      position: 'absolute',
      top: '-30px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <img src="/iconos/cliente.svg" alt="Primero el cliente" style={{ width: '30px', height: '30px' }} />
    </div>
    <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Primero el cliente</h3>
    <p>Estamos enfocados y comprometidos con la satisfacción total del cliente.</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default AboutPage;