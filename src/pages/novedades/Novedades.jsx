import React from 'react';
import '../../styles/HomePage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Novedades() {


    return (
        <div className="home-page-container" style={{ position: 'relative' }}>
            <img
                src="/images/fondo6.webp"
                alt="Background"
                className="responsive-background-image"
            />

  
        </div>
    );
}

export default Novedades;