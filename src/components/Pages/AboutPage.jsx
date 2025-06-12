// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Panel } from 'primereact/panel';

function AboutPage() {


  return (
    <div className="main">
      <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
        {/* Columna de texto (50%) */}
        <div
          style={{
            width: '50%',
            backgroundColor: 'white',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Acerca de nosotros
          </span>
          <span style={{ fontSize: '1.1rem' }}>
            One Fresh es una marca de la empresa JR Proyecto & Desarrollo Sac, proveemos a nuestros
            clientes con productos de la más alta calidad en agua purificada y embotellada cumpliendo
            con los más altos estándares en purificación, producción y empaque con el objetivo de alcanzar
            la máxima eficiencia y satisfacción de nuestros clientes.
          </span>
        </div>

        {/* Columna con imagen de fondo (50%) */}
        <div
          style={{
            width: '50%',
            backgroundImage: 'url(/images/nosotros/image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />

        {/* Div con el degradado en el centro */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '49%',
            width: '2%',
            zIndex: 2,
            background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0), rgba(0,0,0,0), rgba(0,0,0,0.2))',
            pointerEvents: 'none',
          }}
        />
      </div>



      <div
        className="div"
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: '20px',
          padding: '0 5%', // opcional: reduce el padding lateral
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {[ // Reutilizamos el contenido para Misión y Visión
          {
            title: 'Misión',
            text:
              'Ofrecer productos con los más altos estándares de calidad que satisfagan a nuestros clientes, con un equipo humano motivado por sus principios éticos para así proyectar una imagen de solidez y responsabilidad en el mercado local, regional y nacional.',
          },
          {
            title: 'Visión',
            text:
              'Ser una empresa líder a nivel nacional en el mercado de agua tratada y embotellada, siendo la calidad un factor trascendental en nuestra operación, distribución y servicio integral.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              boxSizing: 'border-box',
              borderRadius: '10px', // opcional: bordes redondeados
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // sombra aplicada aquí
            }}
          >

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px',
                width: '100%',
              }}
            >
              <img
                src="/iconos/nosotros/1.svg"
                alt={item.title}
                style={{ width: '60px', height: '60px', marginRight: '20px' }}
              />
              <span style={{ fontSize: '40px', fontWeight: '600', color: '#332F30' }}>
                {item.title}
              </span>
            </div>
            <span style={{ textAlign: 'justify', color: '#332F30' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="2" style={{ margin: '0 10%', height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '150px' }} >
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '48px', fontWeight: '600' }}>Nuestros<span style={{ color: '#1685f9' }}>Valores</span> </span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '40px',
          gap: '20px',
          position: 'relative',
        }}>
          {/* Línea roja horizontal */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#E53935',
            zIndex: 0,
            transform: 'translateY(-50%)',
          }}></div>


          {/* 1 - Somos honestos */}
          <div style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            marginTop: '-10px',
            height: '250px',
            width: '250px',
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
            height: '250px',
            width: '250px',
            marginTop: '80px',
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
            marginTop: '-10px',
            height: '250px',
            width: '250px',
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
            height: '250px',
            width: '250px',
            marginTop: '80px',
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
            marginTop: '-10px',
            height: '250px',
            width: '250px',
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