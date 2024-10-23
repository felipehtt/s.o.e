import React, { useState, useEffect } from 'react';
import './index.scss';

const Sli = () => {
  const images = [
    "https://i.pinimg.com/736x/66/30/24/6630248345587244288f0574bd7d5534.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9WaRF0WVk_f3ElUXzIIk8dZ4jZ_HpWgU58hg3JVgCN4KZYDcbnJ-FHGoamIfxMrxkxOh5zYigDgjcKY_7ibp5d8Aa1cNPHYtjwxyIWCgJYgNeaxCbOn2eRA5BR9TAKMG1CHHuzTdNtbM/s1600/casamento-moveis-luxo.jpg",
    "https://img.freepik.com/fotos-premium/lugar-de-luxo-para-a-incrivel-festa-de-casamento_974729-20468.jpg"
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

export default Sli;