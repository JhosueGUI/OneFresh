import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsArrowRight } from 'react-icons/bs';

const Nosotros = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // `once: true` evita que se repita

    return (
        <div ref={ref} className="general" style={{ display: 'flex', height: '600px', gap: '40px' }}>
            <motion.div
                className="contenido"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
                style={{ width: '50%', display: 'flex', flexDirection: 'column' }}
            >
                <div className="container" style={{ height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <p style={{ fontSize: '20px', fontWeight: '500', padding: '0 20%', margin: 0 }}>
                        Conócenos más
                        <span style={{
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'rgb(22, 133, 249)',
                            marginLeft: '30px',
                        }}>
                            <BsArrowRight style={{ fontSize: '25px', color: '#fff' }} />
                        </span>
                    </p>
                </div>
                <div className="2" style={{ height: '20%', display: 'flex', alignItems: 'center', fontWeight: '600' }}>
                    <p style={{ fontSize: '48px', padding: '0 20%' }}>Acerca de <span style={{ color: 'rgb(22, 133, 249)' }}>nosotros</span></p>
                </div>
                <div className="3" style={{ display: 'flex', flexDirection: 'column', height: '70%', backgroundColor: ' rgb(22, 133, 249) ', justifyContent: 'center' }} >
                    <div>
                        <p style={{ fontSize: '32px', color: '#a1e1e8', fontWeight: '600', padding: '0 20%' }}>
                            ¿Quiénes somos?
                        </p>
                        <p style={{ fontSize: '15px', padding: '0 20%', textAlign: 'justify', color: '#fff' }}>
                            One Fresh es una marca de la empresa JR Proyecto & Desarrollo Sac, proveemos a nuestros clientes con productos de la mas alta calidad en agua purificada y embotellada cumpliendo con los mas altos estándares en purificación, producción y empaque con el objetivo de alcanzar la máxima eficiencia y satisfacción de nuestros clientes.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="imagen"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
                style={{ width: '50%' }}
            >
                <motion.img
                    src="/images/nosotros/1.webp"
                    alt="One Fresh"
                    style={{ width: '100%', height: '100%' }}
                />
            </motion.div>
        </div>
    );
};

export default Nosotros;
