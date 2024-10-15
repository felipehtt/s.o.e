import React, { useState, useEffect } from 'react';
import './index.scss';

const Sld2 = () => {
  const images = [
    "https://i.pinimg.com/originals/3b/35/93/3b3593a2563bc0c5c9c823b80426f696.jpg",
    "https://www.organizandoeventos.com.br/artigos/ed/190115205443-6749.jpg",
    "https://th.bing.com/th/id/OIP.DyLvGuorvcTY717bxMq1UAHaE8?rs=1&pid=ImgDetMain",
    "https://www.organizandoeventos.com.br/artigos/ed/190115211309-6842.jpg"
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

export default Sld2;