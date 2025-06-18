import React from 'react';
import '../../styles/HomePage.css';
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
                display: 'block',
                background: 'rgba(6, 182, 212, 0.7)', // A semi-transparent cyan background
                borderRadius: '50%', // Make it circular
                padding: '10px', // Add some padding inside the circle
                right: '-50px', // Position it outside the slider to the right
                width: '40px', // Ensure the width is consistent
                height: '40px', // Ensure the height is consistent
                zIndex: 2, // Ensure it's above other elements
                display: 'flex', // Use flexbox for centering content
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow
            }}
            onClick={onClick}
        >
            <i className="pi pi-angle-right" style={{ color: 'white', fontSize: '1.5em' }}></i> {/* PrimeReact icon */}
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
                display: 'block',
                width: '40px', // Ensure the width is consistent
                height: '40px', // Ensure the height is consistent
                background: 'rgba(6, 182, 212, 0.7)', // A semi-transparent cyan background
                borderRadius: '50%', // Make it circular
                padding: '10px', // Add some padding inside the circle
                left: '-50px', // Position it outside the slider to the left
                zIndex: 2, // Ensure it's above other elements
                display: 'flex', // Use flexbox for centering content
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow    
            }}
            onClick={onClick}
        >
            <i className="pi pi-angle-left" style={{ color: 'white', fontSize: '1.5em' }}></i> {/* PrimeReact icon */}
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
        nextArrow: <NextArrow />, // Assign the custom NextArrow component
        prevArrow: <PrevArrow />, // Assign the custom PrevArrow component
        responsive: [
            {
                breakpoint: 1024,
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

    return (
        <div className="home-page-container" style={{ position: 'relative' }}>
            <img
                src="/images/fondo6.webp"
                alt="Background"
                className="responsive-background-image"
            />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '100%',
                zIndex: 1
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: '50px',
                        fontSize: '3em',
                    }}>
                        Conoce nuestras<span style={{ color: '#06b6d4' }}> Presentaciones</span>
                    </h2>
                    <i className="pi pi-sort-down-fill" style={{ color: '#06b6d4', fontSize: '2em' }}></i>
                </div>
                <Slider {...settings}>
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