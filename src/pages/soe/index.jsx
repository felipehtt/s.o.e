import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Soe() {

    return (

        <div className='pagina-soe pagina'>

            <Cabecalho />
            <div className='blocos'>

                <h2>S.O.E</h2>

                <div className='bloco1'>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eum corporis id laboriosam at enim omnis dignissimos, atque velit eligendi deleniti nulla illo vitae delectus harum labore. Praesentium, velit.</p>

                    <img src="assets/images/equipe1.jpg" alt="Equipe" />
                </div>

                <div className='bloco2'>

                    <img src="assets/images/equipe1.jpg" alt="Equipe" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eum corporis id laboriosam at enim omnis dignissimos, atque velit eligendi deleniti nulla illo vitae delectus harum labore. Praesentium, velit.</p>

                </div>

                <div className='bloco3'>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eum corporis id laboriosam at enim omnis dignissimos, atque velit eligendi deleniti nulla illo vitae delectus harum labore. Praesentium, velit.</p>

                    <img src="assets/images/equipe1.jpg" alt="Equipe" />

                </div>

                <div className='but'>

                    <h2>Veja nossos trabalhos</h2>

                    <button><a href="/festas">Ver Festas</a></button>

                </div>

            </div>

            <Footer />

        </div>

    );

}