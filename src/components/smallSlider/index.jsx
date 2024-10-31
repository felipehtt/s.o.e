import React, { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';

//Usando em festas jovens
const SmallSlider = () => {

    const slides = [        

        { id: 1, img: 'https://www.organizandoeventos.com.br/artigos/ed/190115205205-1793.jpg', alt: 'Festa 1' },
        { id: 2, img: 'https://th.bing.com/th/id/OIP.FB3VloQAqtm3sQQzEEyoagHaGl?rs=1&pid=ImgDetMain', alt: 'Festa 2' },
        { id: 3, img: 'https://www.organizandoeventos.com.br/artigos/ed/190115205443-6749.jpg', alt: '' }

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
        <div className="slider1">
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

        { id: 1, img: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-20.jpg', alt: 'Festa 1' },
        { id: 2, img: 'https://buffetdeucher.com.br/wp-content/uploads/2016/10/14485138_10210763668671658_8592610864170992528_n.jpg', alt: 'Festa 2' },
        { id: 3, img: 'https://cdn0.casamentos.com.br/vendor/4125/3_2/960/jpeg/whatsapp-image-2019-02-18-at-15-04-05-9_13_244125-1551893317.jpeg'}

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
        <div className="slider2">
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


const SmallSliderTriple = () => {

    const slides = [        

        { id: 1, img: 'https://th.bing.com/th/id/R.827d08df99c009fe6dcbc7bbb4006259?rik=ryZdqeTMZYoKyA&pid=ImgRaw&r=0', alt: 'Festa 1' },
        { id: 2, img: 'https://i.pinimg.com/736x/09/57/30/0957303e59789021bc984fe5b3b2cab3.jpg', alt: 'Festa 2' },
        { id: 3, img: 'https://th.bing.com/th/id/R.a10958f626159510811fa020e6bfef6b?rik=I4koV%2fXPRinhIw&pid=ImgRaw&r=0', alt: ''}

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
        <div className="slider3">
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


//usando em festas infantis
const SmallSliderKid = () => {

    const slides = [        

        { id: 1, img: 'https://www.organizandoeventos.com.br/artigos/ed/190115205205-1793.jpg', alt: 'Festa 1' },
        { id: 2, img: 'https://th.bing.com/th/id/OIP.FB3VloQAqtm3sQQzEEyoagHaGl?rs=1&pid=ImgDetMain', alt: 'Festa 2' },
        { id: 3, img: 'https://www.organizandoeventos.com.br/artigos/ed/190115205443-6749.jpg', alt: '' }

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
        <div className="slider4">
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


const SmallSliderTwoKid = () => {

    const slides = [        

        { id: 1, img: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-20.jpg', alt: 'Festa 1' },
        { id: 2, img: 'https://buffetdeucher.com.br/wp-content/uploads/2016/10/14485138_10210763668671658_8592610864170992528_n.jpg', alt: 'Festa 2' },
        { id: 3, img: 'https://cdn0.casamentos.com.br/vendor/4125/3_2/960/jpeg/whatsapp-image-2019-02-18-at-15-04-05-9_13_244125-1551893317.jpeg'}

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
        <div className="slider5">
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


const SmallSliderTripleKid = () => {

    const slides = [        

        { id: 1, img: 'https://th.bing.com/th/id/R.827d08df99c009fe6dcbc7bbb4006259?rik=ryZdqeTMZYoKyA&pid=ImgRaw&r=0', alt: 'Festa 1' },
        { id: 2, img: 'https://i.pinimg.com/736x/09/57/30/0957303e59789021bc984fe5b3b2cab3.jpg', alt: 'Festa 2' },
        { id: 3, img: 'https://th.bing.com/th/id/R.a10958f626159510811fa020e6bfef6b?rik=I4koV%2fXPRinhIw&pid=ImgRaw&r=0', alt: ''}

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
        <div className="slider6">
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
    //festas jovens
    SmallSlider,
    SmallSliderTwo,
    SmallSliderTriple,
    
    //festas infantis
    SmallSliderKid,
    SmallSliderTwoKid,
    SmallSliderTripleKid

}
