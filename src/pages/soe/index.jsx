import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Fly from '../../components/flying';

export default function Soe() {

    return (

        <div className='pagina-soe pagina'>

            <Cabecalho />

            <Fly />

            <div className='blocos'>

                <h2>S.O.E</h2>

                <div className='bloco1'>

                    <div className='textos'>

                        <h3>QUEM SOMOS??</h3>

                        <p>A SOE é uma empresa que oferece as melhores decorações de festas para você e sua família. Somos versáteis nos detalhes e trabalhamos com paixão e dedicação para alegrar a todos e tornar o evento ainda mais especial.</p>

                    </div>

                    <img src="assets/images/logo-soe-com-algo-escrito-removebg-preview.png" alt="Equipe" />
                </div>

                <div className='bloco2'>

                    <img src="assets/images/equipe1.jpg" alt="Equipe" />

                    <p>Nós amamos criar momentos únicos. Cada decoração que fazemos é pensada com carinho, pois sabemos que cada detalhe importa. Nossa alegria vem de ver os sonhos dos clientes se tornarem realidade e tornar o evento inesquecível.</p>

                </div>

                <div className='bloco3'>

                    <p>Nós, da SOE, iniciamos nossa jornada movidos pela paixão por criar momentos especiais. Com o tempo, nossa dedicação e criatividade nos ajudaram a conquistar a confiança de nossos clientes. Cada festa que decoramos é uma nova história, tornando cada celebração única e memorável. Não perca tempo! Venha transformar seus sonhos em realidade.</p>

                    <img src="assets/images/equipe1.jpg" alt="Equipe" />

                </div>

                <div className='but'>

                    <h2>Veja nossos trabalhos</h2>

                    <button><a href="">Ver Festas</a></button>

                </div>

            </div>

            <Footer />

        </div>

    );

}