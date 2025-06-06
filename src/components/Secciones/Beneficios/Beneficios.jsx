import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";

const Beneficios = () => {
    return (
        <div className="general" style={{ height: '600px',gap:'20px',gap:'40px' }}>
            <div className="contenido" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="1" style={{ height: '10%',display:'flex',justifyContent:'space-between', alignItems:'center' }}> 
                    <p style={{fontSize:'48px',fontWeight:'500',padding:'0 10%',color:'rgb(0, 106, 255)',fontWeight:'600'}}>Nuestros Beneficios</p>
                    <p style={{fontSize:'20px',fontWeight:'500',padding:'0 10%'}}>Nuestros Beneficios</p>
                </div>
                <div className="3" style={{ display:'flex',flexDirection:'column', height: '70%', backgroundColor: ' #dcf2fa ',justifyContent:'center' }} >
                    <div>
                        <p style={{fontSize:'32px',color:'rgb(0, 106, 255)',fontWeight:'600',padding:'0 20%'}}>
                            Beneficios de nuestros productos
                        </p>
                        <p style={{fontSize:'15px',padding:'0 20%',textAlign:'justify'}}>
                            En One Fresh, nos comprometemos a ofrecerte productos de la más alta calidad. Nuestros beneficios incluyen agua purificada y embotellada que cumple con los estándares más exigentes, garantizando pureza y frescura en cada gota.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Beneficios;
