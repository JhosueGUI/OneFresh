import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../../styles/HomePage.css';
import '../../styles/Presentacion.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Next Arrow Component
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: 'rgba(6, 182, 212, 0.7)',
                borderRadius: '50%',
                padding: '10px',
                right: '-50px',
                width: '40px',
                height: '40px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}
            onClick={onClick}
        >
            <i className="pi pi-angle-right" style={{ color: 'white', fontSize: '1.5em' }}></i>
        </div>
    );
}

// Custom Prev Arrow Component
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: 'rgba(6, 182, 212, 0.7)',
                borderRadius: '50%',
                padding: '10px',
                left: '-50px',
                width: '40px',
                height: '40px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}
            onClick={onClick}
        >
            <i className="pi pi-angle-left" style={{ color: 'white', fontSize: '1.5em' }}></i>
        </div>
    );
}

function Presentacion() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <div className="home-page-container" style={{ position: 'relative' }}>
            <img
                src="/images/fondo6.webp"
                alt="Background"
                className="fondo6"
            />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '1000px',
                zIndex: 1
            }}
                className="mi-carrusel">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <motion.h2
                        ref={titleRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{
                            textAlign: 'center',
                            marginBottom: '50px',
                            fontSize: '3em',
                        }}
                    >
                        Conoce nuestras <span style={{ color: '#06b6d4' }}>Presentaciones</span>
                    </motion.h2>
                    <i className="pi pi-sort-down-fill" style={{ color: '#06b6d4', fontSize: '2em' }}></i>
                </div>
                <Slider {...settings} className="mi-carrusel">
                    <div>
                        <div style={{ padding: '4%' }}>
                            <img
                                src="/images/presentacion/logo2.webp"
                                alt="Slide 1"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '15px',
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: '4%' }}>
                            <img
                                src="/images/presentacion/logo1.webp"
                                alt="Slide 2"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '15px',
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: '4%' }}>
                            <img
                                src="/images/presentacion/logo3.webp"
                                alt="Slide 3"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '15px',
                                }}
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Presentacion;
