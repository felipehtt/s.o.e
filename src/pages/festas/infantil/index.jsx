import './index.scss';
import { Link } from 'react-router-dom';
import { SmallSliderKid, SmallSliderTwoKid, SmallSliderTripleKid } from '../../../components/smallSlider';
import Fly from '../../../components/flying'
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';

export default function Infantil() {

    return (

        <div className='pagina-infantil pagina'>

            <Cabecalho />

            <Fly />

            <img className="img" src="https://th.bing.com/th/id/R.02b81cf61a1fa07ff87fd00e0f8a4ba0?rik=WDIzs%2fdDrRXwFA&pid=ImgRaw&r=0" alt="" />

            <h2>Algumas das Festas Infantis</h2>

            <div className='section'>

                <div className='container'>

                    <SmallSliderKid />

                    <div className='textos'>

                        <h3>Heróis</h3>

                        <p>Essa festa é uma celebração cheia de ação e diversão! Com decorações inspiradas em heróis e suas histórias incríveis, cada detalhe vai deixar todos animados. É a oportunidade perfeita para criar um ambiente divertido e acolhedor, onde cada convidado pode se sentir como um verdadeiro herói e aproveitar momentos inesquecíveis.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>


                </div>

                <div className='container'>

                    <div className='textoss'>

                        <h3>Desenhos</h3>

                        <p>Essa festa vai levar a emoção dos esportes para outro nível! Com decorações que capturam a essência de diferentes modalidades, o ambiente será repleto de energia e animação. É uma chance de juntar amigos e celebrar o amor pelo esporte de uma forma divertida e memorável, onde todos podem se divertir e competir em um clima descontraído.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <SmallSliderTwoKid />

                </div>

                <div className='container'>

                    <SmallSliderTripleKid />

                    <div className='textos'>

                        <h3>Safari</h3>

                        <p>Essa festa vai transportar todos para uma emocionante aventura na selva! Com decorações inspiradas em um safári, o ambiente será cheio de cores vibrantes e elementos da natureza. É uma ótima oportunidade para explorar e celebrar a beleza da vida selvagem, onde cada convidado pode se sentir parte de uma expedição inesquecível!</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

            </div>

            {/* <div className='static'>

                <img src='assets/images/pietro.png' alt='' />

            </div>

            <div className='blocos'>

                <h2>Algumas de nossas Festas Infantis</h2>

                <div className='bloco1'>

                    <div className='textos'>

                        <h3>Heróis</h3>

                        <p>Essa festa é uma celebração cheia de ação e diversão! Com decorações inspiradas em heróis e suas histórias incríveis, cada detalhe vai deixar todos animados. É a oportunidade perfeita para criar um ambiente divertido e acolhedor, onde cada convidado pode se sentir como um verdadeiro herói e aproveitar momentos inesquecíveis.</p>


                    </div>

                </div>

                <div className='bloco2'>

                    <div className='textos'>

                        <h3>Desenhos</h3>

                        <p>Essa festa vai levar a emoção dos esportes para outro nível! Com decorações que capturam a essência de diferentes modalidades, o ambiente será repleto de energia e animação. É uma chance de juntar amigos e celebrar o amor pelo esporte de uma forma divertida e memorável, onde todos podem se divertir e competir em um clima descontraído.</p>


                    </div>

                </div>

                <div className='bloco3'>

                    <div className='textos'>

                        <h3>Safari</h3>

                        <p>Essa festa vai transportar todos para uma emocionante aventura na selva! Com decorações inspiradas em um safári, o ambiente será cheio de cores vibrantes e elementos da natureza. É uma ótima oportunidade para explorar e celebrar a beleza da vida selvagem, onde cada convidado pode se sentir parte de uma expedição inesquecível!</p>


                    </div>

                </div>

            </div> */}

            <Footer />

        </div>

    );

}