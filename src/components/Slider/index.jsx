import React, { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';

const Slider = (props) => {
    const slides = [
        { id: props.id, img: 'https://wallpapercave.com/wp/wp2848100.jpg', alt: 'Festa 1' },
        { id: props.id, img: 'https://andreaguimaraes.com.br/qds1/wp-content/uploads/2022/07/casamento-jo-e-edu-400x267.jpg', alt: 'Festa 2' },
        { id: props.id, img: 'https://andreaguimaraes.com.br/qds1/wp-content/uploads/2024/08/parada_da_disney_1-3-400x266.jpg', alt: 'Festa 3' },
        { id: props.id, img: 'https://andreaguimaraes.com.br/qds1/wp-content/uploads/2024/08/15_anos_3-3-400x267.jpg', alt: 'Festa 1' },    
        
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

export default Slider;
