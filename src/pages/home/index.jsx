import './index.scss';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Home() {

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

    <div className="pagina-home pagina">

      <Cabecalho />

      <main>

        <div className='container'>

          <img className='img1' src="/assets/images/soe1.png" alt="" />

          <p>Há 15 anos no mercado de festas e eventos !</p>

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

            <button onClick={handleLeftClick}><FontAwesomeIcon icon={faAnglesLeft} color='#fff' size='3x'/></button>
            <button onClick={handleRightClick}><FontAwesomeIcon icon={faAnglesRight} color='#fff' size='3x'/></button>

          </div>

        </div>

      </main>


      <Footer />

    </div>

  );

}


