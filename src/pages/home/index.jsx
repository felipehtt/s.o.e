import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Slider from '../../components/Slider';
import Carrossel from '../../components/carrossel';
import Footer from '../../components/footer';

export default function Home() {

  return (

    <div className="pagina-home pagina">

      <Cabecalho />

      <main>

        <div className='container'>

          <div className='top'>

            <Slider />

            <p>Há 15 anos no mercado de festas e eventos !</p>

          </div>

          <Carrossel/>

        </div>

      </main>


      <Footer />

    </div>

  );

}


