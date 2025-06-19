import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../../styles/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Novedades.css';

function Novedades() {
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });
    const areCardsInView = useInView(cardsRef, { once: true, margin: '-100px' });

    return (
        <div className="home-page-container" style={{ position: 'relative' }}>
            {/* Fondo */}
            <img
                src="/images/fondo6.webp"
                alt="Background"
                className="fondo7"
            />

            {/* Contenido */}
            <div
                className="mi-carousel"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '1200px',
                    zIndex: 1,
                    padding: '50px'
                }}
            >
                {/* Título */}
                <div
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}
                >
                    <motion.h2
                        ref={titleRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                            fontSize: '3em',
                        }}
                    >
                        Últimas<span style={{ color: '#06b6d4' }}> Novedades</span>
                    </motion.h2>
                    <motion.i
                        className="pi pi-sort-down-fill"
                        style={{ color: '#06b6d4', fontSize: '2em' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    ></motion.i>
                </div>

                {/* Tarjetas */}
                <motion.div
                    ref={cardsRef}
                    style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={areCardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    {/* Tarjeta 1 */}
                    <div style={{ width: '300px', textAlign: 'center' }}>
                        <img
                            src="/images/novedades/11.webp"
                            alt="Agua Alcalina"
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        <p style={{ marginTop: '15px', fontSize: '1.2em' }}>
                            ¿Por qué es mejor beber agua One Fresh?
                        </p>
                        <a href="#" style={{ color: '#06b6d4', fontWeight: 'bold' }}>leer más</a>
                    </div>

                    {/* Tarjeta 2 */}
                    <div style={{ width: '300px', textAlign: 'center' }}>
                        <img
                            src="/images/novedades/12.webp"
                            alt="Cuánta agua tomar"
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        <p style={{ marginTop: '15px', fontSize: '1.2em' }}>
                            ¿Cuánta agua debemos tomar cada día?
                        </p>
                        <a href="#" style={{ color: '#06b6d4', fontWeight: 'bold' }}>leer más</a>
                    </div>

                    {/* Tarjeta 3 */}
                    <div style={{ width: '300px', textAlign: 'center' }}>
                        <img
                            src="/images/novedades/13.webp"
                            alt="Beneficios del agua"
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        <p style={{ marginTop: '15px', fontSize: '1.2em' }}>
                            Los 10 principales beneficios de beber agua
                        </p>
                        <a href="#" style={{ color: '#06b6d4', fontWeight: 'bold' }}>leer más</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Novedades;
