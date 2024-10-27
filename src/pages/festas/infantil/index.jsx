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

                <img src='https://media.discordapp.net/attachments/1253785078484434957/1299804810517811221/FB_IMG_1729968000593.jpg?ex=671e8910&is=671d3790&hm=bbe3cb941ebe690526103a43a97bde9ee26c78c6a24cccc8e65c9196c19beb29&=&format=webp&width=717&height=498' alt='' />

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

                    <img src='https://www.artealegria.com.br/wp-content/uploads/2019/06/DSC_0524-1.jpg' alt='Festa de Heróis' />

                </div>

                <div className='bloco2'>

                    <img src='https://festacleanchic.com/wp-content/uploads/2017/12/24991272_10156091209725921_6740559705137476078_n.jpg' alt='Festa de Esporte' />

                    <div className='textos'>

                        <h3>Esportes</h3>

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

                    <img src='https://media.discordapp.net/attachments/1253785078484434957/1299804392085782628/FB_IMG_1729877585945.jpg?ex=671e88ac&is=671d372c&hm=1ade0103c29faf33ac3c9cfac421709dccf86e67570187fab5d547af64df188c&=&format=webp&width=498&height=498' alt='Festa de Safari' />
                </div>

            </div>

            <Footer />

        </div>

    );

}