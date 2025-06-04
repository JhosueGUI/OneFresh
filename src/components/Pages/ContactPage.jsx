// src/pages/ContactPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function ContactPage() {
  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      style={{ padding: '3em', maxWidth: '600px', margin: '3em auto' }}
    >
      <Card title="Contáctanos" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
        <p style={{ marginBottom: '2em', textAlign: 'center', color: '#555' }}>
          ¿Tienes alguna pregunta o proyecto en mente? ¡Envíanos un mensaje!
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
          <motion.div variants={itemVariants}>
            <span className="p-float-label">
              <InputText id="nombre" style={{ width: '100%' }} />
              <label htmlFor="nombre">Tu Nombre</label>
            </span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <span className="p-float-label">
              <InputText id="email" type="email" style={{ width: '100%' }} />
              <label htmlFor="email">Tu Email</label>
            </span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <span className="p-float-label">
              <InputTextarea id="mensaje" rows={5} cols={30} style={{ width: '100%' }} autoResize />
              <label htmlFor="mensaje">Tu Mensaje</label>
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ alignSelf: 'flex-end', marginTop: '1em' }}
          >
            <Button label="Enviar Mensaje" icon="pi pi-send" className="p-button-success p-button-lg" />
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
}

export default ContactPage;