// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Panel } from 'primereact/panel';

function AboutPage() {


  return (
    <div className="main">
      <div className="div" style={{ background: 'rgb(220, 242, 250)', height: '500px', display: 'flex', alignItems: 'center', gap: '20px', padding: '0 20%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4%', background: 'rgb(25, 151, 197)',width:'50%',height:'70%' }}>
          <span style={{ fontSize: '40px', fontWeight: '600' }}>
            <img src="/iconos/nosotros/1.svg" alt="One Fresh" style={{ width: '100px', height: '100px' }} />
            Misión
          </span>
          <span style={{ textAlign: 'justify' }}>
            Ofrecer productos con los mas altos estándares de calidad que satisfagan a nuestros clientes, con un equipo humano motivado por sus principios éticos para así proyectar una imagen de solidez y responsabilidad en el mercado local, regional y nacional.
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4%', background: 'rgb(25, 151, 197)',width:'50%',height:'70%' }}>
          <span style={{ fontSize: '40px', fontWeight: '600' }}>
            <img src="/iconos/nosotros/2.svg" alt="One Fresh" style={{ width: '100px', height: '100px' }} />
            Visión
          </span>
          <span style={{ textAlign: 'justify' }}>
            Ser una empresa líder a nivel nacional en el mercado de agua tratada y embotellada, siendo la calidad un factor trascendental en nuestra operación, distribución y servicio integral.
          </span>
        </div>
      </div>
      <div className="2" >
        <img src="/iconos/nosotros/3.svg" alt="One Fresh" style={{ width: '100%', height: '100%' ,padding:'10%'}} />
        <div style={{display:'flex' ,gap:'20px' , justifyContent:'center', alignItems:'center'}}>
          <span style={{ fontSize: '48px', fontWeight: '600' }}>Nuestros<span style={{color:'#1685f9'}}>Valores</span> </span>
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;