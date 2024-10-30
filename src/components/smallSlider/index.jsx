import React, { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';


const SmallSlider = () => {

    const slides = [        

        { id: 1, img: 'https://th.bing.com/th/id/OIP.Q2CqPoe5asEKV67YJv8nsQHaFj?rs=1&pid=ImgDetMain', alt: 'Festa 1' },
        { id: 2, img: 'https://th.bing.com/th/id/OIP.FB3VloQAqtm3sQQzEEyoagHaGl?rs=1&pid=ImgDetMain', alt: 'Festa 2' }

    ]                           

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

}


const SmallSliderTwo = () => {

    const slides = [        

        { id: 1, img: 'https://wallpapercave.com/wp/wp2848100.jpg', alt: 'Festa 1' },
        { id: 2, img: 'https://andreaguimaraes.com.br/qds1/wp-content/uploads/2022/07/casamento-jo-e-edu-400x267.jpg', alt: 'Festa 2' }

    ]                           

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

}

export {
    SmallSlider,
    SmallSliderTwo
}
