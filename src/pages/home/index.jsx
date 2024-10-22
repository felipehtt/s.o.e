import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Slider from '../../components/Slider';
import Sld2 from '../../components/Sld2';
import Footer from '../../components/footer';

export default function Home() {

  return (

    <div className="pagina-home pagina">

      <Cabecalho />

      <main>

          <div className='top'>

            <Slider />

            <p>O melhor da festa é esperar por ela. Há 15 anos no mercado de festas e eventos !</p>

          </div>
          
          <div className='images'> 

            <div className='conj'>

              <img src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain" alt="" />
              <p>Festas Infantis</p>
              
            </div>

            <div className='conj'>

              <img src="https://casarpontocom-inspiracoes.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/02/festa-de-casamento-Foto-Freepik-6.jpg" alt="" />
              <p>Festas Jovens</p>

            </div>

            <div className='conj'>

              <img src="https://lh7-us.googleusercontent.com/7mf8WmPAFQsRVxxVOXwU4t86HaT-Xk3iucLBXn8K3vcB1-3cVd_M1F--WJZsTQMSHWMSipZNqAz4LRM8gGpavDDTLSpi1ukI0RbNijv0pq1lhuE9xB_NJmPG9WjHmvxxZpebrgFOQJlkl2lx_ZeZFVU" alt="" />
              <p>Festas Adultos</p>

            </div>

          </div>

          <div className='bottom'>

            <Sld2 />
            <p>Aproveite com seus amigos e familiares...</p>

          </div>

      </main>


      <Footer />

    </div>

  );

}


