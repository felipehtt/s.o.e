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

          <h2>Nossas Festas</h2>

          <p>Alguns dos nossos tipos de Festas, e ao clicar verá nossos melhores temas.</p>

        </div>

        <div className="images">

          <div className="conj">

            <Link to='/festas/infantil'>

              <img
                src="https://storage.alboom.ninja/sites/10402/albuns/1156284/festa-infantil-homem-aranha-vingadores-marvel-kids-park-barra-recreio-rj-3.jpg?t=1680047826"
                alt=""
              />

            </Link>

            <p>Festas Infantis</p>

          </div>

          <div className="conj">

            <Link to='/festas/jovens'>

              <img
                src="https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg"
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
        
        <h2>O melhor da festa é viver ela!</h2>

      </main>

      <Footer />

    </div>
  );
}
