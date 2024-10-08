import './index.scss';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function Carrossel() {

    const [data, setData] = useState([]);
    const carousel = useRef(null);
  
    useEffect(() => {
  
      fetch('http://localhost:3000/static/temas.json')
        .then((response) => response.json())
        .then(setData);
  
    }, []);
  
    if (!data || data.lenght == 0)
      return null;
  
    const handleLeftClick = (e) => {
  
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
  
    }
  
    const handleRightClick = (e) => {
  
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
  
    }

    return (

        <div className='comp-carousel'>

            <div className='carousel' ref={carousel}>

                {data.map((item) => {

                    const { idTema, img, tema } = item;

                    return (

                        <div className='item' key={idTema}>

                            <div className='image'>

                                <img src={img} alt="" />

                            </div>

                            <div className='info'>

                                <span className='name'>{tema}</span>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className='buttons'>

                <button onClick={handleLeftClick}><FontAwesomeIcon className='red' icon={faAnglesLeft} color='#fff' size='3x' /></button>
                <button onClick={handleRightClick}><FontAwesomeIcon className='red' icon={faAnglesRight} color='#fff' size='3x' /></button>

            </div>

        </div>

    );

}