import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Listos = () => {
    return (
        <motion.div
            className="general"
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '500px',
                gap: '40px',
                justifyContent: 'center',
                background: 'rgb(22, 133, 249)',
                alignItems: 'center'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div className="1" style={{ display: 'flex', width: '100%', justifyContent: 'center' }} variants={fadeInUp}>
                <span style={{ fontSize: '48px', fontWeight: '600', textAlign: 'center', color: '#fff' }}>
                    ¡Estamos listos para <span style={{ color: '#a1e1e8' }}>atenderte!</span>
                </span>
            </motion.div>

            <motion.div className="1" style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '40px' }} variants={fadeInUp}>
                <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                    <img src="/iconos/listos/telefono.png" alt="Telefono" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                    +51 908 906 872
                </span>

                <div style={{ width: '1px', height: '40px', backgroundColor: '#fff' }} />

                <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                    <img src="/iconos/listos/correo.png" alt="Correo" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                    ventas@jrprodesa.pe
                </span>
            </motion.div>

            <motion.div className="1" style={{ display: 'flex', width: '100%', justifyContent: 'center' }} variants={fadeInUp}>
                <Button
                    label="Consultar ahora"
                    className="p-button-outlined"
                    icon="pi pi-angle-right"
                    iconPos="right"
                    style={{
                        borderRadius: '10px',
                        width: '14%',
                        height: '55px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#fff',
                        background: '#1685f9'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default Listos;
