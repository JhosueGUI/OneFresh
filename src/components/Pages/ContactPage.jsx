import React from 'react';
import { motion } from 'framer-motion';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function ContactPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div style={{ backgroundColor: '#f0f4f8' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center', // ← esto centra verticalmente
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4em 2em',
          minHeight: '80vh', // ← asegura altura completa de la ventana
        }}

      >
        {/* Lado Izquierdo - Información de contacto */}
        <motion.div variants={fadeInUp} style={{
          flex: 1, minWidth: '280px', background: 'rgb(22, 133, 249)', padding: '2em', borderRight: '12px',borderLeft:'12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
          <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>
            ¡Estamos listos para <span style={{ color: '#a1e1e8' }}>atenderte!</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#fff', margin: '1em 0', textAlign: 'justify' }}>
            Llame a nuestra oficina o complete el formulario de contacto. Le responderemos dentro de 24 horas.
          </p>

          <div style={{ marginTop: '2em' }}>
            <motion.p variants={fadeInUp} style={{ fontWeight: 600, fontSize: '1.2rem', color:'#a1e1e8' }}>
              Información de contacto
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
              <img src="/iconos/listos/telefono.png" alt="Teléfono" style={{ width: 24, marginRight: 10 }} />
              <span style={{ color: '#fff' }}>(51) 908 906 872</span>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', marginTop: '0.8em' }}>
              <img src="/iconos/listos/correo.png" alt="Correo" style={{ width: 24, marginRight: 10 }} />
              <span style={{ color: '#fff' }}>ventas@jrprodesa.pe</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Lado Derecho - Formulario */}
        <motion.div
          variants={fadeInUp}
          style={{ flex: 1, minWidth: '300px' }}
        >
          <Card
            title="¿Cómo podemos ayudarte?"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <motion.form
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}
            >
              <motion.div variants={fadeInUp}>
                <span className="p-float-label">
                  <InputText id="nombre" style={{ width: '100%' }} />
                  <label htmlFor="nombre">Nombre completo</label>
                </span>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <span className="p-float-label">
                  <InputText id="email" type="email" style={{ width: '100%' }} />
                  <label htmlFor="email">Correo</label>
                </span>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <span className="p-float-label">
                  <InputText id="telefono" type="tel" style={{ width: '100%' }} />
                  <label htmlFor="telefono">Teléfono</label>
                </span>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <span className="p-float-label">
                  <InputTextarea id="mensaje" rows={5} autoResize style={{ width: '100%' }} />
                  <label htmlFor="mensaje">Mensaje</label>
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ alignSelf: 'flex-end', marginTop: '1em' }}
              >
                <Button
                  label="Enviar Mensaje"
                  icon="pi pi-send"
                  backgroundColor="#1E40AF"
                  className="p-button-primary p-button-lg"
                />
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </motion.div>

      {/* Sección del Mapa */}
      <div style={{ width: '100%', marginTop: '4em' }}> {/* Added margin-top for spacing */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.9102634280279!2d-76.869187!3d-12.004627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c30068da7b3d%3A0x11f1c4f347000b9d!2sONE%20FRESH!5e0!3m2!1ses!2spe!4v1749759131307!5m2!1ses!2spe" // <-- IMPORTANT: Replace this with your actual Google Maps embed URL
          width="100%"
          height="400"
          allowFullScreen="" // Added `allowFullScreen` as recommended by Google Maps embeds
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en Google Maps"
          style={{ border: 0 }} // Removes the default iframe border
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;