import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import { Button } from "primereact/button";
import { motion } from "framer-motion";

const logoWebP = '/images/botella500.webp';
const bidonWeP = '/images/bidon.webp';
const dispensadorWebP = '/images/dispensador.webp';

const teamMembers = [
  { name: "Bidones", role: "20 litros", image: bidonWeP },
  { name: "Botella Personal", role: "500 ml", image: logoWebP },
  { name: "Dispensadores", role: "medida", image: dispensadorWebP },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const totalCards = teamMembers.length;
    const normalizedIndex = (newIndex + totalCards) % totalCards;
    setCurrentIndex(normalizedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1);
      } else {
        updateCarousel(currentIndex - 1);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      updateCarousel(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      updateCarousel(currentIndex + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <motion.div
      className="carousel-background-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="contenido"
        style={{ display: 'flex', flexDirection: 'column', width: '70%', gap: '40px' }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span style={{ fontSize: '48px', fontWeight: '600', display: 'flex', flexDirection: 'column' }}>
          Nuestras <span style={{ color: '#1685f9' }}>Presentaciones</span>
        </span>
        <span style={{ textAlign: 'justify' }}>
          En OneFresh, te ofrecemos soluciones completas para mantenerte hidratado: desde nuestras prácticas Botellas Personales ideales para llevar a todos lados, hasta Bidones de mayor capacidad para tu hogar u oficina, y Dispensadores que garantizan un acceso fácil y rápido al agua. Personaliza cada producto para que refleje tu estilo o marca, ¡y convierte la hidratación en una experiencia cómoda y con estilo!
        </span>
        <div className="1" style={{ display: 'flex', width: '100%' }}>
          <Button
            label="Consultar ahora"
            className="p-button-outlined"
            icon="pi pi-angle-right"
            iconPos="right"
            style={{
              borderRadius: '10px',
              height: '55px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#1685f9',
              borderColor: '#1685f9'
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="carousel-container"
        style={{ display: 'flex', flexDirection: 'column' }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="carousel-track">
          {teamMembers.map((member, i) => {
            const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;

            let cardClass = "card";
            if (offset === 0) cardClass += " center";
            else if (offset === 1) cardClass += " right-1";
            else if (offset === 2) cardClass += " right-2";
            else if (offset === teamMembers.length - 1) cardClass += " left-1";
            else if (offset === teamMembers.length - 2) cardClass += " left-2";
            else cardClass += " hidden";

            return (
              <div
                key={i}
                className={cardClass}
                onClick={() => updateCarousel(i)}
                onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
                onTouchEnd={(e) => {
                  touchEndX.current = e.changedTouches[0].screenX;
                  handleSwipe();
                }}
              >
                <img src={member.image} alt={member.name} />
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="member-info">
          <div className="member-name">{teamMembers[currentIndex].name}</div>
          <div className="member-role">{teamMembers[currentIndex].role}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
