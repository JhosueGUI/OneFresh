import React from 'react';
import { motion } from 'framer-motion';
import { Panel } from 'primereact/panel'; // Panel is imported but not used in this version.

// Define common animation variants for reusability
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 }, // 'amount: 0.5' means it animates when 50% of the element is in view
};

const slideUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 },
};

const valueCardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  viewport: { once: true, amount: 0.5 },
};

function AboutPage() {
  return (
    <motion.div
      className="main"
      style={{ display: 'flex', flexDirection: 'column', gap: '200px' }}
      // You can apply a general fade-in to the whole page or let individual sections animate.
      // Keeping it on individual sections provides more controlled animation.
    >
      {/* Section 1: About One Fresh Hero */}
      <div style={{
        position: 'relative',
        width: '100%',
        backgroundImage: 'url(/images/nosotros/image.svg)', /* Establece la imagen como fondo */
        backgroundSize: 'cover', /* Cubre todo el área del div */
        backgroundPosition: 'center', /* Centra la imagen de fondo */
        backgroundRepeat: 'no-repeat', /* Evita que la imagen se repita */
        minHeight: '500px', /* Asegura que el div tenga una altura para que la imagen se vea */
        display: 'flex', /* Usa flexbox para alinear el contenido */
        alignItems: 'center', /* Centra verticalmente el contenido */
        justifyContent: 'flex-start', /* Alinea el contenido al inicio (izquierda) */
        paddingLeft: '5%', /* Opcional: Añade un poco de espacio desde el borde izquierdo del div principal */
      }}>
        <motion.div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          {...slideUp} // Apply slide-up animation
          transition={{ duration: 0.7, delay: 0.3 }} // Slower transition with a slight delay
        >
          <span style={{ display: 'block', fontWeight: 'bold', fontSize: '40px', marginBottom: '10px', textAlign: 'left', color: '#332F30' }}>
            Acerca de <span style={{ color: '#1685f9' }}>nosotros</span>
          </span>
          <span style={{ textAlign: 'justify' }}>
            One Fresh es una marca de la empresa JR Proyecto & Desarrollo Sac, proveemos a nuestros clientes con productos de la más alta calidad en agua purificada y embotellada cumpliendo con los más altos estándares en purificación, producción y empaque con el objetivo de alcanzar la máxima eficiencia y satisfacción de nuestros clientes.
          </span>
        </motion.div>
      </div>

      {/*
        ---
        Section 2: Mission and Vision
        ---
      */}
      <motion.div
        className="div"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '20px',
          padding: '0 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}
        {...fadeIn} // Apply fade-in animation to the container
        transition={{ delay: 0.2 }} // Slight delay for this section
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
              boxSizing: 'border-box',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
            {...slideUp} // Apply slide-up animation to each card
            transition={{ delay: 0.4 + index * 0.2 }} // Staggered animation for each card
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
                src="/iconos/nosotros/1.svg" // Make sure this path is correct for your project
                alt={item.title}
                style={{ width: '60px', height: '60px', marginRight: '20px' }}
              />
              <span style={{ fontSize: '40px', fontWeight: '600', color: '#332F30' }}>
                {item.title}
              </span>
            </div>
            <span style={{ textAlign: 'justify', color: '#332F30' }}>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/*
        ---
        Section 3: Our Values
        ---
      */}
      <motion.div
        className="2" // This class name isn't very descriptive
        style={{ margin: '0 10%', height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '150px' }}
        {...fadeIn} // Apply fade-in to the container of values
        transition={{ delay: 0.4 }}
      >
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
          {/* Horizontal connecting line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#1685f9',
            zIndex: 0,
            transform: 'translateY(-50%)',
          }}></div>

          {/* Value Card: Somos honestos */}
          <motion.div
            style={{
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
            }}
            variants={valueCardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }} // Ensure these specific viewport settings are applied
          >
            <div style={{
              backgroundColor: '#1685f9',
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
              <img src="/iconos/nosotros/mano.webp" alt="Somos honestos" style={{ width: '35px', height: '35px' }} />
            </div>
            <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Somos honestos</h3>
            <p>Entender al otro y sus necesidades fortalece nuestras relaciones.</p>
          </motion.div>

          {/* Value Card: Nos gustan los retos */}
          <motion.div
            style={{
              backgroundColor: '#545454',
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
            }}
            variants={valueCardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }} // Stagger animation
          >
            <div style={{
              backgroundColor: '#1685f9',
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
              <img src="/iconos/nosotros/mano2.webp" alt="Nos gustan los retos" style={{ width: '35px', height: '35px' }} />
            </div>
            <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Nos gustan los retos</h3>
            <p>Enfrentamos los desafíos con gusto y tenacidad.</p>
          </motion.div>

          {/* Value Card: Somos empáticos */}
          <motion.div
            style={{
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
            }}
            variants={valueCardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }} // Stagger animation
          >
            <div style={{
              backgroundColor: '#1685f9',
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
              <img src="/iconos/nosotros/mano3.webp" alt="Somos empáticos" style={{ width: '35px', height: '35px' }} />
            </div>
            <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Somos empáticos</h3>
            <p>Ser honestos genera confianza que es la base de todas las relaciones.</p>
          </motion.div>

          {/* Value Card: Bien común */}
          <motion.div
            style={{
              backgroundColor: '#545454',
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
            }}
            variants={valueCardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6 }} // Stagger animation
          >
            <div style={{
              backgroundColor: '#1685f9',
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
              <img src="/iconos/nosotros/mano4.webp" alt="Bien común" style={{ width: '35px', height: '35px' }} />
            </div>
            <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Bien común</h3>
            <p>Nuestros esfuerzos adquiere sentido cuando contempla el beneficio de todos.</p>
          </motion.div>

          {/* Value Card: Primero el cliente */}
          <motion.div
            style={{
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
            }}
            variants={valueCardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8 }} // Stagger animation
          >
            <div style={{
              backgroundColor: '#1685f9',
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
              <img src="/iconos/nosotros/mano5.webp" alt="Primero el cliente" style={{ width: '35px', height: '35px' }} />
            </div>
            <h3 style={{ marginTop: '40px', fontWeight: 'bold' }}>Primero el cliente</h3>
            <p>Estamos enfocados y comprometidos con la satisfacción total del cliente.</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;