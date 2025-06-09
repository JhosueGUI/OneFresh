import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { BsArrowRight } from 'react-icons/bs';

const Listos = () => {
    return (
        <div className="general" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '500px', gap: '20px', gap: '40px', justifyContent: 'center', background: 'rgb(220, 242, 250)', alignItems: 'center' }}>
            <div className="1" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: '600', textAlign: 'center' }}>¡Estamos listos para <span style={{ color: '#1685f9' }}>atenderte!</span></span>
            </div>
            <div className="1" style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                <span style={{ fontSize: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center',gap:'10px' }}>
                    <img src="/iconos/listos/telefono.png" alt="Telefono" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                    +51 908 906 872
                </span>

                {/* Línea divisoria */}
                <div style={{ width: '1px', height: '40px', backgroundColor: '#332F30' }} />

                <span style={{ fontSize: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center',gap:'10px' }}>
                    <img src="/iconos/listos/correo.png" alt="Correo" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                    ventas@jrprodesa.pe
                </span>
            </div>

            <div className="1" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <Button
                    label="Consultar ahora"
                    className="p-button-outlined"
                    icon="pi pi-angle-right"
                    iconPos="right"
                    style={{
                        borderRadius: '10px',
                        width: '14%',
                        height: '55px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#fff',
                        background: '#1685f9'
                    }}
                />
            </div>

        </div>
    );
};

export default Listos;
