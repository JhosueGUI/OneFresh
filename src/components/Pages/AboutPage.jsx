import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animación
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 },
};

const slideUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay: 0.3 },
  viewport: { once: true, amount: 0.5 },
};

const valueCardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
  viewport: { once: true, amount: 0.5 },
};

function AboutPage() {
  return (
    <motion.div
      className="main"
      style={{ display: 'flex', flexDirection: 'column', gap: '200px' }}
    >
      {/* Sección 1: Acerca de nosotros */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          backgroundImage: 'url(/images/nosotros/image.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '5%',
        }}
        {...slideUp}
      >
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <span style={{
            display: 'block',
            fontWeight: 'bold',
            fontSize: '40px',
            marginBottom: '10px',
            textAlign: 'left',
            color: '#332F30'
          }}>
            Acerca de <span style={{ color: '#06b6d4' }}>nosotros</span>
          </span>
          <span style={{ textAlign: 'justify', color: '#332F30' }}>
            One Fresh es una marca de la empresa JR Proyecto & Desarrollo Sac. Proveemos a nuestros clientes con productos de la más alta calidad en agua purificada y embotellada, cumpliendo con altos estándares de purificación, producción y empaque, con el objetivo de alcanzar la máxima eficiencia y satisfacción.
          </span>
        </div>
      </motion.div>

      {/* Sección 2: Misión y Visión */}
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '50px',
          padding: '0 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}
        {...fadeIn}
      >
        {[
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
          <motion.div
            key={index}
            style={{
              flexBasis: '30%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              background: '#fff',
              color: '#332F30',
            }}
            {...slideUp}
            transition={{ delay: 0.4 + index * 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '100%' }}>
              <img
                src={`/iconos/nosotros/1.svg`}
                alt={item.title}
                style={{ width: '60px', height: '60px', marginRight: '20px' }}
              />
              <span style={{ fontSize: '40px', fontWeight: '600' }}>{item.title}</span>
            </div>
            <span style={{ textAlign: 'justify' }}>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Sección 3: Nuestros valores */}
      <motion.div
        style={{
          margin: '0 10%',
          height: '800px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '150px'
        }}
        {...fadeIn}
      >
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '48px', fontWeight: '600' }}>
            Nuestros <span style={{ color: '#06b6d4' }}>Valores</span>
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px', gap: '20px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#a1e1e8',
            transform: 'translateY(-50%)',
            zIndex: 0
          }}></div>

          {[
            {
              title: 'Somos honestos',
              desc: 'Entender al otro y sus necesidades fortalece nuestras relaciones.',
              icon: 'mano.webp',
              delay: 0,
              bg: '#ffffff',
              text: '#000000',
              iconBg: '#06b6d4',
            },
            {
              title: 'Nos gustan los retos',
              desc: 'Enfrentamos los desafíos con gusto y tenacidad.',
              icon: 'mano2.webp',
              delay: 0.2,
              bg: '#06b6d4',
              text: '#ffffff',
              iconBg: '#a1e1e8',
            },
            {
              title: 'Somos empáticos',
              desc: 'Ser honestos genera confianza que es la base de todas las relaciones.',
              icon: 'mano3.webp',
              delay: 0.4,
              bg: '#ffffff',
              text: '#000000',
              iconBg: '#06b6d4',
            },
            {
              title: 'Bien común',
              desc: 'Nuestros esfuerzos adquiere sentido cuando contempla el beneficio de todos.',
              icon: 'mano4.webp',
              delay: 0.6,
              bg: '#06b6d4',
              text: '#ffffff',
              iconBg: '#a1e1e8',
            },
            {
              title: 'Primero el cliente',
              desc: 'Estamos enfocados y comprometidos con la satisfacción total del cliente.',
              icon: 'mano5.webp',
              delay: 0.8,
              bg: '#ffffff',
              text: '#000000',
              iconBg: '#06b6d4',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={valueCardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: item.delay }}
              style={{
                backgroundColor: item.bg,
                color: item.text,
                padding: '20px',
                borderRadius: '12px',
                textAlign: 'center',
                width: '250px',
                height: '250px',
                marginTop: i % 2 === 1 ? '80px' : '-10px',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div style={{
                backgroundColor: item.iconBg,
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
                <img src={`/iconos/nosotros/${item.icon}`} alt={item.title} style={{ width: '35px', height: '35px' }} />
              </div>
              <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;
