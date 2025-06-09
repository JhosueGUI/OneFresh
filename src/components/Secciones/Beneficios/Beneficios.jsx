import React from "react";
import { motion } from "framer-motion";

const Beneficios = () => {
    return (
        <div className="general" style={{ display: 'flex', flexDirection: 'column', height: '950px', gap: '80px', background: 'rgb(220, 242, 250)', justifyContent: 'center' }}>
            <div style={{textAlign: 'center'}}>
            <span style={{ height: '10%', fontSize: '48px', fontWeight: '500', padding: '0 10%', fontWeight: '600' }}>¡ Nuestros proceso <span style={{ color: 'rgb(0, 106, 255)' }}>productivo !</span></span>
            </div>

            <div className="3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%', height: '55%' }} >
                <div className="1" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%', height: '100%', borderRadius: '29px', background: 'white' }}>
                    <div className="titulo" style={{ display: 'flex', flexDirection: 'column', padding: '10%' }}>
                        <div className="icono">
                            <motion.img
                                src="/images/proceso/1.webp"
                                alt="Beneficio 1"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px'
                                }}
                            />
                        </div>
                        <div className="desc" >
                            <p style={{ fontSize: '22px', fontWeight: '600', color: 'rgb(0, 106, 255)' }}>Producción</p>
                            <p style={{ textAlign: 'justify' }}>Nuestra moderna planta de producción garantiza la más alta calidad en agua tratada, osmotizada, ozonizada y alcalina. </p>
                        </div>
                    </div>
                </div>
                <div className="1" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%', height: '100%', borderRadius: '29px', background: 'white' }}>
                    <div className="titulo" style={{ display: 'flex', flexDirection: 'column', padding: '10%' }}>
                        <div className="icono">
                            <motion.img
                                src="/images/proceso/2.webp"
                                alt="Beneficio 1"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px'
                                }}
                            />
                        </div>
                        <div className="desc">
                            <p style={{ fontSize: '22px', fontWeight: '600', color: 'rgb(0, 106, 255)' }}>Almacén</p>
                            <p style={{ textAlign: 'justify' }}>Nuestros productos se almacenan cuidadosamente en un ambiente con temperatura controlada a 15 °C, preservando su calidad y frescura hasta la entrega.</p>
                        </div>
                    </div>
                </div>
                <div className="1" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%', height: '100%', borderRadius: '29px', background: 'white' }}>
                    <div className="titulo" style={{ display: 'flex', flexDirection: 'column', padding: '10%' }}>
                        <div className="icono">
                            <motion.img
                                src="/images/proceso/1.webp"
                                alt="Beneficio 1"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px'
                                }}
                            />
                        </div>
                        <div className="desc" >
                            <p style={{ fontSize: '22px', fontWeight: '600', color: 'rgb(0, 106, 255)' }}>Logística</p>
                            <p style={{ textAlign: 'justify' }}>Nuestro equipo de logística está comprometido con la entrega eficiente y oportuna de todos los pedidos. </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Beneficios;
