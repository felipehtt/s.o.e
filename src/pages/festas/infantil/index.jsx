import './index.scss';
import { Link } from 'react-router-dom';
import Fly from '../../../components/flying'
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';

export default function Infantil() {

    return (

        <div className='pagina-infantil pagina'>

            <Cabecalho />

            <Fly />

            <div className='static'>

                <img src='assets/images/pietro.png' alt='' />

            </div>

            <div className='blocos'>

                <h2>Algumas de nossas Festas Infantis</h2>

                <div className='bloco1'>

                    <div className='textos'>

                        <h3>Heróis</h3>

                        <p>Essa festa é uma celebração cheia de ação e diversão! Com decorações inspiradas em heróis e suas histórias incríveis, cada detalhe vai deixar todos animados. É a oportunidade perfeita para criar um ambiente divertido e acolhedor, onde cada convidado pode se sentir como um verdadeiro herói e aproveitar momentos inesquecíveis.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <img src='https://media.discordapp.net/attachments/1216553829559177268/1300558219642536057/Picsart_24-10-28_17-33-51-896.jpg?ex=672146ba&is=671ff53a&hm=221e3b1599467a30b69f0c041f9636ce5e32b8beaf52c9c55c0f187cbffb1f90&=&format=webp&width=640&height=640' alt='Festa de Heróis' />

                </div>

                <div className='bloco2'>

                    <img src='https://media.discordapp.net/attachments/1216553829559177268/1300558220376539166/Picsart_24-10-28_17-31-28-839.jpg?ex=672146ba&is=671ff53a&hm=69fdde475c149e4a49cf6993f7871350a15d65213234f2cca04595151d2a6062&=&format=webp&width=640&height=640' alt='Festa de desenhos' />

                    <div className='textos'>

                        <h3>Desenhos</h3>

                        <p>Essa festa vai levar a emoção dos esportes para outro nível! Com decorações que capturam a essência de diferentes modalidades, o ambiente será repleto de energia e animação. É uma chance de juntar amigos e celebrar o amor pelo esporte de uma forma divertida e memorável, onde todos podem se divertir e competir em um clima descontraído.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

                <div className='bloco3'>

                    <div className='textos'>

                        <h3>Safari</h3>

                        <p>Essa festa vai transportar todos para uma emocionante aventura na selva! Com decorações inspiradas em um safári, o ambiente será cheio de cores vibrantes e elementos da natureza. É uma ótima oportunidade para explorar e celebrar a beleza da vida selvagem, onde cada convidado pode se sentir parte de uma expedição inesquecível!</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <img src='https://media.discordapp.net/attachments/1216553829559177268/1300558219931811865/Picsart_24-10-28_17-32-34-309.jpg?ex=672146ba&is=671ff53a&hm=502951bc750b55ddfde98af87cc5a2b2328c26cf425b429d83e55135ae81fc49&=&format=webp&width=640&height=640' alt='Festa de Safari' />
                </div>

            </div>

            <Footer />

        </div>

    );

}