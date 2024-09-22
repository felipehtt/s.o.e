import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Home() {

  return (

    <div className="pagina-home pagina">

      <Cabecalho />

      <main>

        <div className='container'>

          <img className='img1' src="/assets/images/soe1.png" alt="" />

          <p>Há 15 anos no mercado de festas e eventos !</p>

          <div className='carousel'>

            <div className='item'>

              <div className='image'>

                <img src="/assets/images/soe2.webp" alt="" />

              </div>

              <div className='info'>

                <span className='name'>Festas Infantis</span>

              </div>

            </div>

          </div>

        </div>

      </main>


      <Footer />

    </div>

  );

}


