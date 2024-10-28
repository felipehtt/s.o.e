import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import Fly from '../../../components/flying'


export default function Jovens() {

    return (

        <div className='pagina-jovens pagina'>

            <Cabecalho />

            <Fly />

            <div className='static'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBCW5GIAhi92wQLVtSTzG6HD99c30FEsXDw&s' alt=''
                />
            </div>

            <div className='blocos'>

                <h2>Alguma de nossas festas para Jovens</h2>

                <div className='bloco1'>

                    <img src="https://media.discordapp.net/attachments/1216553829559177268/1300559508392906763/Picsart_24-10-28_17-38-56-480.jpg?ex=672147ee&is=671ff66e&hm=a56a89c106f67633d9194dadff56ec1302a304a6e795551e29a878297562df74&=&format=webp&width=640&height=640" alt="" />

                    <div className='textos'>

                        <h2>Festas de 15 anos</h2>

                        <p>Essa é uma festa em que cada detalhe exala encanto e sofisticação, ideal para comemorar os 15 anos da sua filha de forma inesquecível. Torne este aniversário ainda mais especial com nossas decorações exclusivas, pensadas para criar momentos mágicos e memórias que durarão para sempre.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

                <div className='bloco2'>

                    <div className='textos'>

                        <h2>Halloween</h2>

                        <p>
                            "Essa é uma festa que denota elementos de terror e diversão, perfeita para comemorar o Halloween de uma forma inesquecível. Transforme sua festa em uma noite cheia de magia e suspense com nossas decorações, pensadas para criar momentos encantadores e lembranças arrepiantes."</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <img src="https://cdn.shopify.com/s/files/1/0533/3906/2441/files/3_77066389-f07c-4175-85b4-28b26024fdc9.jpg?v=1664437871" alt="" />
                </div>


                <div className='bloco3'>

                    <img src="https://media.discordapp.net/attachments/1216553829559177268/1300556848142876732/Picsart_24-10-28_17-28-23-073.jpg?ex=67214573&is=671ff3f3&hm=cd49fea2bf94e28554d5101fcb43e2346253d889ee052581a96b48ea34849957&=&format=webp&width=640&height=640" alt="" />

                    <div className='textos'>

                        <h2>Neon</h2>

                        <p>Essa é uma festa brilhante cheia energia e estilo, perfeita para comemorar com o tema Neon de forma iluminada. Marque seu evento com um espaço vibrante e lotado de cores com nossas decorações especiais, feitas para criar momentos iluminados e momentos que vão brilhar para sempre na sua memória.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

            </div>


            <Footer />
        </div>

    );

}