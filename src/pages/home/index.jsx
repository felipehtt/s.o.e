import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import { Slider } from '../../components/Slider';
import Footer from '../../components/footer';
import Fly from '../../components/flying';

export default function Home() {

  return (

    <div className="pagina-home pagina">

      <Cabecalho />

      <Fly />

      <main>

        <Slider />

        <h2>O melhor da festa é viver ela!</h2>

        <div className='first'>

          <div className='top'>

            <div className='textos'>

              <div className='bloc1'>

                <h3>Há 15 anos no mercado de festas e eventos!</h3>

                <p>Com 15 anos de experiência no mercado de festas e eventos, somos apaixonados por transformar sonhos em realidade. Nossa equipe se dedica a cada detalhe, garantindo experiências memoráveis e únicas. Cada evento é uma nova oportunidade de criar momentos especiais que ficarão na memória dos nossos clientes.</p>

              </div>

              <div className='bloc2'>

                <h3>A Melhor Experiência</h3>

                <p>Estamos comprometidos em proporcionar a melhor experiência aos nossos clientes. Criando momentos únicos que capturam sua essência, sempre com atenção aos detalhes. Nossa equipe dedicada assegura que tudo ocorra perfeitamente, desde a concepção até a execução. O resultado são momentos inesquecíveis, que trazem alegria e satisfação a todos os envolvidos.</p>

              </div>

            </div>

          </div>

          <a href="/festas" className='but'>

            <Link to='/festas' className='but2'>VEJA NOSSAS FESTAS</Link>

          </a>

        </div>

        <div className='second'>

          <div className='textos'>

            <h1>Celebrações para Todas as Idades</h1>

            <p>Trabalhamos em categorias: <strong>Infantil, Jovem e Adulto</strong> (não é algo estritamente imposto), oferecendo festas para <strong>qualquer faixa etária e uma variedade de temas e estilos.</strong> Nossa equipe dedicada cuida de cada detalhe, garantindo que cada evento seja uma <strong>celebração única e memorável</strong>. Com criatividade e profissionalismo, proporcionamos experiências repletas de alegria e diversão, <strong>atendendo às expectativas de nossos clientes e criando momentos inesquecíveis para todos os convidados.</strong></p>



          </div>

          <h4>Clique na imagem e veja nosso catálogo.</h4>

          <div className='images'>

            <div className='conj'>

              <Link to='/festas/infantil'><img src="https://storage.alboom.ninja/sites/10402/albuns/1156284/festa-infantil-homem-aranha-vingadores-marvel-kids-park-barra-recreio-rj-3.jpg?t=1680047826" alt="" /></Link>

              <p>Festas Infantis</p>

            </div>

            <div className='conj'>

              <Link to='festas/jovens'><img src="https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg" alt="" /></Link>
              <p>Festas Jovens</p>

            </div>

            <div className='conj'>

              <Link to='festas/adulto'><img src="https://lh7-us.googleusercontent.com/7mf8WmPAFQsRVxxVOXwU4t86HaT-Xk3iucLBXn8K3vcB1-3cVd_M1F--WJZsTQMSHWMSipZNqAz4LRM8gGpavDDTLSpi1ukI0RbNijv0pq1lhuE9xB_NJmPG9WjHmvxxZpebrgFOQJlkl2lx_ZeZFVU" alt="" /></Link>
              <p>Festas Adultos</p>

            </div>

          </div>

        </div>

        <div className='bottom'>

          <h2>Viva o melhor da sua festa!</h2>

        </div>

      </main>


      <Footer />

    </div>

  );

}


