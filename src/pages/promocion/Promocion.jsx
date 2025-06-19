import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Promocion.css';

function Promocion() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });
    const isParagraphInView = useInView(paragraphRef, { once: true, margin: '-100px' });

    return (
        <div className="promocion-container">
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 5%',
                    boxSizing: 'border-box',
                }}
            >
                {/* Fondo */}
                <img
                    src="/images/fondo7.webp"
                    alt="Background"
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
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '1400px',
                        zIndex: 1,
                        gap: '40px',
                        padding: '40px 0',
                    }}
                >
                    {/* Texto */}
                    <div
                        className="texto-container"
                        style={{
                            color: 'white',
                            textAlign: 'left',
                            maxWidth: '600px',
                            flex: '1 1 300px',
                        }}
                    >
                        <motion.h1
                            ref={titleRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            style={{ fontSize: '2.5em', marginBottom: '20px' }}
                        >
                            Nuestras Promociones
                        </motion.h1>

                        <motion.p
                            ref={paragraphRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isParagraphInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                            style={{ fontSize: '1.1em', lineHeight: '1.6', marginBottom: '30px' }}
                        >
                            Desliza y descubre las promociones vigentes que Agua One Fresh tiene para ti.
                        </motion.p>

                        <div
                            
                            className="gota"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: '#06b6d4',
                                width: '70%',
                                maxWidth: '250px',
                                height: '50px',
                                borderRadius: '10px',
                                justifyContent: 'center',
                                fontWeight: '600',
                                marginBottom: '20px',
                                cursor: 'pointer',
                            }}
                        >
                            Conoce más
                            <img
                                src="/images/Importancia/animacion1.webp"
                                alt=""
                                style={{ width: '40px', height: '40px', marginLeft: '10px' }}
                            />
                        </div>
                    </div>

                    {/* Carrusel */}
                    <div style={{ flex: '1 1 300px', maxWidth: '1000px', width: '100%' }}>
                        <Slider {...settings}>
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <div style={{ padding: '4%' }}>
                                        <img
                                            src={`/images/promociones/pro${num}.webp`}
                                            alt={`Banner ${num}`}
                                            style={{ width: '100%', borderRadius: '10px' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promocion;
