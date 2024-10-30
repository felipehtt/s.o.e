import "./index.scss";
import { Link } from 'react-router-dom';
import Fly from '../../components/flying'
import Cabecalho from "../../components/cabecalho";
import { SliderOne } from "../../components/Slider";
import Footer from "../../components/footer";

export default function Festas() {
  return (
    <div className="pagina-festas pagina">
      <Cabecalho />

      <SliderOne />

      <Fly />
      
      <main>
        <div className="top">
          <p>Alguns dos nossos tipos de Festas</p>
        </div>

        <div className="images">
          <div className="conj">
            <Link to='/festas/infantil'> 
             <img
              src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain"
              alt=""
              /> 
            </Link>
            <p>Festas Infantis</p>
          </div>

          <div className="conj">
           <Link to='/festas/jovens'>
              <img
              src="https://casarpontocom-inspiracoes.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/02/festa-de-casamento-Foto-Freepik-6.jpg"
              alt=""
              />
           </Link>
            <p>Festas Jovens</p>
          </div>

          <div className="conj">
            <Link to='/festas/adulto'>
              <img
              src="https://lh7-us.googleusercontent.com/7mf8WmPAFQsRVxxVOXwU4t86HaT-Xk3iucLBXn8K3vcB1-3cVd_M1F--WJZsTQMSHWMSipZNqAz4LRM8gGpavDDTLSpi1ukI0RbNijv0pq1lhuE9xB_NJmPG9WjHmvxxZpebrgFOQJlkl2lx_ZeZFVU"
              alt=""
               />
            </Link>
            <p>Festas Adultos</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
