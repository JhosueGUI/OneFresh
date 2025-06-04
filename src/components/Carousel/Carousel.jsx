import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Mueve tu CSS aquí o usa Tailwind si prefieres

const logoWebP = '/images/botella500.webp'; // Ruta correcta para acceder a la imagen en la carpeta public
const bidonWeP = '/images/bidon.webp';
const fondoProductos = '/images/fondo_carrousel.webp';

const teamMembers = [
  { name: "Botella Personal", role: "500 ml", image: logoWebP },
  { name: "Bidones", role: "20 litros", image: bidonWeP },
  { name: "Emma Rodriguez", role: "Lead Developer", image: logoWebP },
  { name: "Julia Gimmel", role: "UX Designer", image: logoWebP },
  { name: "Lisa Anderson", role: "Marketing Manager", image: logoWebP },
  { name: "James Wilson", role: "Product Manager", image: logoWebP }
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
    // Nuevo div que envuelve el carrusel con la imagen de fondo
    <div className="carousel-background-container">
      <div className="carousel-container"style={{display:'flex', flexDirection: 'column'}}>
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

        <div className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>
          &#8249;
        </div>
        <div className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>
          &#8250;
        </div>

        <div className="member-info">
          <div className="member-name">{teamMembers[currentIndex].name}</div>
          <div className="member-role">{teamMembers[currentIndex].role}</div>
        </div>

        <div className="dots">
          {teamMembers.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => updateCarousel(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;