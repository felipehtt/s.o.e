import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Soe() {

    return (

        <div className='pagina-soe pagina'>

            <Cabecalho />

            <h1>S.O.E</h1>

            <div className='blocos'>
                <div className='bloco1'>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eum corporis id laboriosam at enim omnis dignissimos, atque velit eligendi deleniti nulla illo vitae delectus harum labore. Praesentium, velit.</p>

                    <img src="/public/assets/images/equipe1.jpg" alt="Equipe" />
                </div>

                <div className='bloco2'>

                    <img src="/public/assets/images/equipe1.jpg" alt="Equipe" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eum corporis id laboriosam at enim omnis dignissimos, atque velit eligendi deleniti nulla illo vitae delectus harum labore. Praesentium, velit.</p>

                </div>

                <div className='bloco3'>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe eum corporis id laboriosam at enim omnis dignissimos, atque velit eligendi deleniti nulla illo vitae delectus harum labore. Praesentium, velit.</p>

                    <img src="/public/assets/images/equipe1.jpg" alt="Equipe" />

                </div>
            </div>

            <Footer />

        </div>

    );

}