import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from 'primereact/button';
import '../../styles/Inspiracion.css';

function Inspiracion() {
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });
    const isParagraphInView = useInView(paragraphRef, { once: true, margin: '-100px' });

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}
        >
            {/* Fondo */}
            <img
                src="/images/fondo5.webp"
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    filter: 'brightness(70%)',
                }}
            />

            {/* Contenido */}
            <div
                className="gota-container"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    textAlign: 'left',
                    maxWidth: '700px',
                    width: '90%',
                    padding: '0 20px',
                }}
            >
                <motion.h1
                    ref={titleRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="titulo"
                    style={{
                        fontSize: '2.5em',
                        marginBottom: '20px',
                    }}
                >
                    Nuestra Inspiración
                </motion.h1>

                <motion.p
                    ref={paragraphRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isParagraphInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="descripcion"
                    style={{
                        fontSize: '1.1em',
                        lineHeight: '1.6',
                        marginBottom: '30px',
                        textAlign: 'justify',
                    }}
                >
                    Perú es un país de una gran riqueza cultural. Agua One Fresh es una marca que
                    representa a las mujeres del Perú. Nos inspiramos en las "Princesas de la Realeza
                    Inca", quienes tuvieron un rol protagónico al contraer nupcias con descendientes
                    españoles.
                </motion.p>

                <div
                    className="gota"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#06b6d4',
                        width: 'fit-content',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0891b2';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#06b6d4';
                    }}
                >
                    Conoce más
                    <img
                        src="/images/Importancia/animacion1.webp"
                        alt="Animación"
                        style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Inspiracion;
