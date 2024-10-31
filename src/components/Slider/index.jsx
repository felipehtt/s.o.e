import React, { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';

const Slider = () => {
    const slides = [
        { id: 1, img: 'https://img.freepik.com/fotos-gratis/resumo-luxo-suave-fundo-vermelho-natal-dia-dos-namorados-layout-designstudioroom-modelo-web-busine_1258-54290.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 1' },
        { id: 2, img: 'https://img.freepik.com/fotos-premium/fotografia-completa-da-parede-vermelha_1048944-30661786.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 2' },
        { id: 3, img: 'https://img.freepik.com/fotos-premium/desenho-de-fundo-minimalista-com-gradiente-suave_558873-12010.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 3' },
        { id: 4, img: 'https://img.freepik.com/fotos-premium/desenho-de-fundo-minimalista-com-gradiente-suave_558873-12050.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 1' },    
        
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [displaySlides, setDisplaySlides] = useState(slides);

    useEffect(() => {

        setDisplaySlides([...slides, slides[0]]);

    }, [slides])

    const changeSlide = (direction) => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide('next');
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="slide" key={slide}>
                        <img src={slide.img} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <button className="prev" style={{backgroundColor: "#000"}} onClick={() => changeSlide('prev')}>&#10094;</button>
            <button className="next" style={{backgroundColor: "#000"}} onClick={() => changeSlide('next')}>&#10095;</button>

            <div className="indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>

        </div>
    );
};

const SliderOne = () => {

    const slides = [
        { id: 1, img: 'https://img.freepik.com/fotos-premium/fundo-lila-com-textura-lugar-horizontal-para-texto_1089554-1917.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 1' },
        { id: 2, img: 'https://img.freepik.com/fotos-gratis/resumo-luxo-macio-fundo-vermelho-projeto-de-layout-dos-namorados-de-natal-estudio-sala-modelo-da-web-relatorio-de-negocios-com-cor-gradiente-de-circulo-suave_1258-54519.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 2' },
        { id: 3, img: 'https://img.freepik.com/fotos-premium/warm-luxury-orange-abstract-design-de-fundo-criativo_851755-224568.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 3' },
        { id: 4, img: 'https://img.freepik.com/fotos-gratis/fundo-de-papel-de-parede-colorido-borrado-vivido_58702-5904.jpg?ga=GA1.1.473080738.1730401021&semt=ais_siglip', alt: 'Festa 1' },    
        
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [displaySlides, setDisplaySlides] = useState(slides);

    useEffect(() => {

        setDisplaySlides([...slides, slides[0]]);

    }, [slides])

    const changeSlide = (direction) => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide('next');
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="slide" key={slide}>
                        <img src={slide.img} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <button className="prev" style={{backgroundColor: "#000"}} onClick={() => changeSlide('prev')}>&#10094;</button>
            <button className="next" style={{backgroundColor: "#000"}} onClick={() => changeSlide('next')}>&#10095;</button>

            <div className="indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>

        </div>
    );

};

export { 

    Slider, 
    SliderOne 

};
