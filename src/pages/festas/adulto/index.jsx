import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import Fly from '../../../components/flying';
import { SmallSliderOld, SmallSliderTwoOld, SmallSliderTripleOld } from '../../../components/smallSlider';

export default function Adulto() {

    return (

        <div className='pagina-adulto pagina'>

            <Cabecalho />

            <Fly />

            <img className="img" src="https://i.pinimg.com/originals/6a/d8/5b/6ad85bf9a8d499a9c21a9432888d256c.jpg" alt="" />

            <h2>Algumas de nossas Festas para Adultos</h2>

            <div className='section'>

                <div className='container'>

                    <SmallSliderOld />

                    <div className='textos'>

                        <h3>Casamento</h3>

                        <p>Essa é uma festa em que cada detalhe irradia amor e elegância, perfeita para celebrar um casamento inesquecível. Transforme o grande dia com nossas decorações exclusivas, pensadas para criar momentos e memórias que durarão para sempre na história do noivo e da noiva.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>


                </div>

                <div className='container'>

                    <div className='textoss'>

                        <h3>Flores</h3>

                        <p>Essa é uma festa em que cada detalhe exalta a beleza das flores, perfeita para criar um evento inesquecível. Transforme a celebração com nossas decorações exclusivas, inspiradas no tema floral, pensadas para proporcionar momentos encantadores e memórias que florescerão para sempre na vida do aniversariante.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <SmallSliderTwoOld />

                </div>

                <div className='container'>

                    <SmallSliderTripleOld />

                    <div className='textos'>

                        <h3>Mensagens</h3>

                        <p>Essa festa é uma verdadeira celebração de sentimentos e conexões. Com decorações que destacam mensagens personalizadas, cada espaço do evento será uma oportunidade de refletir sobre as boas memórias. É o momento perfeito para criar uma atmosfera especial, onde todos podem se sentir inspirados e apreciados.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

            </div>

            {/* <div className='static'>

                <img src='https://i.pinimg.com/originals/6a/d8/5b/6ad85bf9a8d499a9c21a9432888d256c.jpg' alt='' />

            </div>

            <div className='blocos'>

                <h2>Algumas de nossas Festas para Adultos</h2>

                <div className='bloco1'>

                    <div className='textos'>

                        <h3>Casamento</h3>

                        <p>Essa é uma festa em que cada detalhe irradia amor e elegância, perfeita para celebrar um casamento inesquecível. Transforme o grande dia com nossas decorações exclusivas, pensadas para criar momentos e memórias que durarão para sempre na história do noivo e da noiva.</p>

                        <a href='/intencao' className='but' >
                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>
                        </a>

                    </div>

                    <img src='https://media.discordapp.net/attachments/1216553829559177268/1300549167168491613/Picsart_24-10-28_07-49-58-474.jpg?ex=67213e4c&is=671feccc&hm=194767ac19dba9f888ed081e868beb3ac00514286147fd03eedccd4a149bb2b0&=&format=webp&width=640&height=640' alt='Festa de Casamento' />

                </div>

                <div className='bloco2'>

                    <img src='https://media.discordapp.net/attachments/1216553829559177268/1300549166887604264/Picsart_24-10-28_07-49-12-275.jpg?ex=67213e4c&is=671feccc&hm=44b89f716ed670371903fe046476d4bdc88932c1b4f4c3ec5a5c81fddab1216a&=&format=webp&width=640&height=640' alt='Festa Country' />

                    <div className='textos'>

                        <h3>Flores</h3>

                        <p>Essa é uma festa em que cada detalhe exalta a beleza das flores, perfeita para criar um evento inesquecível. Transforme a celebração com nossas decorações exclusivas, inspiradas no tema floral, pensadas para proporcionar momentos encantadores e memórias que florescerão para sempre na vida do aniversariante.</p>

                        <a href='/intencao' className='but' >

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

                <div className='bloco3'>

                    <div className='textos'>

                        <h3>Mensagens</h3>

                        <p>Essa festa é uma verdadeira celebração de sentimentos e conexões. Com decorações que destacam mensagens personalizadas, cada espaço do evento será uma oportunidade de refletir sobre as boas memórias. É o momento perfeito para criar uma atmosfera especial, onde todos podem se sentir inspirados e apreciados.</p>

                        <a href='/intencao' className='but' >
                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>
                        </a>
                    </div>

                    <img src='https://media.discordapp.net/attachments/1216553829559177268/1300551738222448661/Picsart_24-10-28_17-08-05-103.jpg?ex=672140b1&is=671fef31&hm=d8635b649e4561c8b0acdd9d56b5776687f12032d8789b97180fafdcda4d3dee&=&format=webp&width=640&height=640' alt='Festa de Anos 50' />
                </div>

            </div> */}

            <Footer />

        </div>



    )

}








