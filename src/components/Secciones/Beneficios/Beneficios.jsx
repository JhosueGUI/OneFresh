import React from "react";
import { motion } from "framer-motion";

const Beneficios = () => {
    return (
        <div className="general" style={{ display: 'flex', flexDirection: 'column', height: '950px', gap: '80px', background: 'rgb(22, 133, 249)', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: '600', padding: '0 10%', color: '#fff' }}>
                    ¡ Nuestro proceso <span style={{ color: '#a1e1e8' }}>productivo !</span>
                </span>
            </div>

            <div className="3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%', height: '55%' }} >
                {[
                    {
                        img: "/images/proceso/1.webp",
                        title: "Producción",
                        text: "Nuestra moderna planta de producción garantiza la más alta calidad en agua tratada, osmotizada, ozonizada y alcalina."
                    },
                    {
                        img: "/images/proceso/2.webp",
                        title: "Almacén",
                        text: "Nuestros productos se almacenan cuidadosamente en un ambiente con temperatura controlada a 15 °C, preservando su calidad y frescura hasta la entrega."
                    },
                    {
                        img: "/images/proceso/1.webp",
                        title: "Logística",
                        text: "Nuestro equipo de logística está comprometido con la entrega eficiente y oportuna de todos los pedidos."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="1"
                        style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%', height: '100%', borderRadius: '29px', background: 'white' }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="titulo" style={{ display: 'flex', flexDirection: 'column', padding: '10%' }}>
                            <div className="icono">
                                <img
                                    src={item.img}
                                    alt={`Beneficio ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderTopLeftRadius: '20px',
                                        borderTopRightRadius: '20px'
                                    }}
                                />
                            </div>
                            <div className="desc">
                                <p style={{ fontSize: '22px', fontWeight: '600', color: '#1685f9' }}>{item.title}</p>
                                <p style={{ textAlign: 'justify' }}>{item.text}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Beneficios;
