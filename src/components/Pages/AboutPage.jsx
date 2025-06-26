import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/About.css';

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
    <motion.div className="main" style={{ display: 'flex', flexDirection: 'column', gap: '200px' }}>
      
      {/* Sección 1: Acerca de nosotros */}
      <motion.div
        className="about"
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
        <div className='about-text' style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span className='span-titulo' style={{
            fontWeight: 'bold',
            fontSize: '40px',
            marginBottom: '10px',
            textAlign: 'left',
            color: '#332F30'
          }}>
            Acerca de <span style={{ color: '#06b6d4' }}>nosotros</span>
          </span>
          <span className='span' style={{ textAlign: 'justify', color: '#332F30' }}>
            One Fresh es una marca de la empresa JR Proyecto & Desarrollo Sac. Proveemos a nuestros clientes con productos de la más alta calidad en agua purificada y embotellada, cumpliendo con altos estándares de purificación, producción y empaque, con el objetivo de alcanzar la máxima eficiencia y satisfacción.
          </span>
        </div>
      </motion.div>

      {/* Sección 2: Misión y Visión */}
      <motion.div className='mission-vision' {...fadeIn}>
        {[
          {
            title: 'Misión',
            text: 'Ofrecer productos con los más altos estándares de calidad que satisfagan a nuestros clientes, con un equipo humano motivado por sus principios éticos para así proyectar una imagen de solidez y responsabilidad en el mercado local, regional y nacional.',
          },
          {
            title: 'Visión',
            text: 'Ser una empresa líder a nivel nacional en el mercado de agua tratada y embotellada, siendo la calidad un factor trascendental en nuestra operación, distribución y servicio integral.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="card"
            {...slideUp}
            transition={{ delay: 0.4 + index * 0.2 }}
          >
            <div className="card-header">
              <img src={`/iconos/nosotros/1.svg`} alt={item.title} />
              <span>{item.title}</span>
            </div>
            <span style={{ textAlign: 'justify' }}>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Sección 3: Nuestros valores */}
      <motion.div className="valores-section" {...fadeIn}>
        <div className="valores-title">
          <span> Nuestros <span style={{ color: '#06b6d4' }}>Valores</span> </span>
        </div>

        <div className="valores-container">
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
    className={`valor-card ${i === 1 || i === 3 ? 'shifted' : ''}`}
    variants={valueCardVariants}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: item.delay }}
    style={{
      backgroundColor: item.bg,
      color: item.text,
    }}
  >
    <div className="icon-wrapper" style={{ backgroundColor: item.iconBg }}>
      <img src={`/iconos/nosotros/${item.icon}`} alt={item.title} />
    </div>
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </motion.div>
))}

        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;
