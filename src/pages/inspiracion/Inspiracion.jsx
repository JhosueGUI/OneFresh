import { Button } from 'primereact/button';
import React from 'react';

function Inspiracion() {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh', // Or a fixed height, depending on your layout
                overflow: 'hidden',
                display: 'flex',
                // Removed justifyContent: 'center'
                alignItems: 'center', // Keeps content vertically centered
                paddingLeft: '21.5%', // Add padding to push content from the left edge
                boxSizing: 'border-box', // Ensure padding is included in width
            }}
        >
            <img
                src="/images/fondo5.webp" // Make sure this path is correct
                alt="Background"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    filter: 'brightness(70%)', // This applies to the image content itself
                }}
            />
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    textAlign: 'left', // Set text alignment to left
                    maxWidth: '700px', // Adjust max-width as needed
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5em',
                        marginBottom: '20px',
                        margin: '0 0 20px 0', // Reset default margin to avoid unwanted space
                    }}
                >
                    Nuestra Inspiración
                </h1>
                <p
                    style={{
                        fontSize: '1.1em',
                        lineHeight: '1.6',
                        marginBottom: '30px',
                        margin: '0 0 30px 0', // Reset default margin
                    }}
                >
                    Perú es un país de una gran riqueza cultural. Agua Rosella es una marca que
                    representa a las mujeres del Perú. Nos inspiramos en las "Princesas de la Realeza
                    Inca", quienes tuvieron un rol protagónico al contraer nupcias con descendientes
                    españoles.
                </p>

                <div className="gota" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', background: '#06b6d4', width: '30%', height: '50px', borderRadius: '10px', justifyContent: 'center',fontWeight:'600' }} >
                    Conoce más
                    <img
                        src="/images/Importancia/animacion1.webp"
                        style={{ width: '40px', height: '40px', marginLeft: '10px' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Inspiracion;