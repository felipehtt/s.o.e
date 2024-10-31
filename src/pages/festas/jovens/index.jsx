import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import Fly from '../../../components/flying'
import { SmallSlider, SmallSliderTwo, SmallSliderTriple } from '../../../components/smallSlider';


export default function Jovens() {

    return (

        <div className='pagina-jovens pagina'>

            <Cabecalho />

            <Fly />

            <div className='static'>
                <img src='https://www.organizandoeventos.com.br/artigos/ed/190115211412-8597.jpg' alt=''
                />
            </div>

            <div className='blocos'>

                <h2>Alguma de nossas festas para Jovens</h2>

                <div className='bloco1'>

                    <div className='img'>

                        <SmallSliderTwo />

                    </div>


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

                        <h2>Filmes e Séries</h2>

                        <p>
                            "Essa é uma festa que denota elementos de cultura POP e diversão, perfeita para comemorar o seu dia de uma forma inesquecível. Transforme sua festa em uma noite cheia de magia e diversão com nossas decorações, pensadas para criar momentos encantadores e lembranças arrepiantes."</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <SmallSlider />

                </div>


                <div className='bloco3'>

                    <SmallSliderTriple />

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