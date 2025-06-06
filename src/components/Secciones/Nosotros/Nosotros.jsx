import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";

const Nosotros = () => {
    return (
        <div className="general" style={{display:'flex', height: '600px',gap:'20px',gap:'40px' }}>
            <div className="contenido"style={{  width: '50%', display: 'flex', flexDirection: 'column' }}>
                <div className="1" style={{ height: '10%' }}>
                    <p style={{fontSize:'20px',fontWeight:'500',padding:'0 20%'}}>Conócenos más</p>
                </div>
                <div className="2" style={{ height: '20%',display:'flex',alignItems:'center',fontWeight:'500'}}>
                    <p style={{fontSize:'48px',padding:'0 20%'}}>Acerca de nosotros</p>
                </div>
                <div className="3" style={{ display:'flex',flexDirection:'column', height: '70%', backgroundColor: ' #dcf2fa ',justifyContent:'center' }} >
                    <div>
                        <p style={{fontSize:'32px',color:'rgb(0, 106, 255)',fontWeight:'600',padding:'0 20%'}}>
                            ¿Quiénes somos?
                        </p>
                        <p style={{fontSize:'15px',padding:'0 20%',textAlign:'justify'}}>
                            One Fresh es una marca de la empresa JR Proyecto & Desarrollo Sac, proveemos a nuestros clientes con productos de la mas alta calidad en agua purificada y embotellada cumpliendo con los mas altos estándares en purificación, producción y empaque con el objetivo de alcanzar la máxima eficiencia y satisfacción de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="imagen" style={{ width: '50%'}}>
                <motion.img
                    src="/images/nosotros/1.webp"
                    alt="One Fresh"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
};

export default Nosotros;
