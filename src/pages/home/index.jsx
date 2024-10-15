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

          <div className='top'>

            <Slider />

            <p>Há 15 anos no mercado de festas e eventos !</p>

          </div>
          
          <div className='images'> 

              <img src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain" alt="" />
              <img src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain" alt="" />
              <img src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain" alt="" />

          </div>

      </main>


      <Footer />

    </div>

  );

}


