import React, { useState, useEffect } from 'react';
import './index.scss';

const Slider = () => {
  const images = [
    "/assets/images/soe1.png",
    "https://www.organizandoeventos.com.br/artigos/ed/190115210338-3714.jpg",
    "https://i.pinimg.com/originals/b3/45/e5/b345e598d1f73e47b71c3e3003d36bb0.jpg",
    "https://www.organizandoeventos.com.br/artigos/ed/190115210056-1455.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]);

  return (
    <div className="slider">

      <div className="slider-wrapper">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

export default Slider;