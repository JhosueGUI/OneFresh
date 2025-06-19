import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/ContactPage.css';

function Promociones() {
    const slideUp = {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.5 },
        viewport: { once: true, amount: 0.5 },
    };

    return (
        <div>
            {/* Sección con imagen de fondo y texto */}
            <div style={{
                position: 'relative',
                width: '100%',
                backgroundImage: 'url(/images/promociones/fondo.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '5%',
            }}>
                <motion.div
                    style={{
                        width: '30%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                    {...slideUp}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <span style={{
                        display: 'block',
                        fontWeight: 'bold',
                        fontSize: '40px',
                        marginBottom: '10px',
                        textAlign: 'left',
                        color: '#000',
                    }}>
                        ¡Adquiere Nuestras <span style={{ color: '#06b6d4' }}>Promociones!</span>
                    </span>
                    <span style={{ textAlign: 'justify', color: '#000' }}>
                        Tenemos las mejores promociones dirigidas a nuestros distribuidores, a nuestros
                        puntos de venta y para los consumidores. ¡Atentos que se vienen más promociones!
                    </span>
                </motion.div>
            </div>

            {/* Sección adicional con título y 3 imágenes grandes */}
            <div style={{ padding: '100px 5%',display:'flex',flexDirection:'column',gap:'60px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px', color: '#333' }}>
                    Promociones al <span style={{ color: '#06b6d4' }}>Consumidor</span>
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '40px',
                }}>
                    {[1, 2, 3].map((num) => (
                        <div key={num} style={{
                            width: '420px',
                            height: '380px',
                            backgroundImage: `url(/images/promociones/pro${num}.webp)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '16px',
                            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Promociones;
