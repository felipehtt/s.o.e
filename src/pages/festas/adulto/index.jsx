import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import Fly from '../../../components/flying';

export default function Adulto(){

    return (
    
        <div className='pagina-adulto pagina'>

<Cabecalho />

<Fly/>

<div className='static'>

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

        <img src='https://media.discordapp.net/attachments/1253785078484434957/1299805998176927835/FB_IMG_1729968235628.jpg?ex=671e8a2b&is=671d38ab&hm=982245e9ca353c566448a02a17d50fe877090f1b9ba30d562b124d93866c5096&=&format=webp&width=587&height=498' alt='Festa de Casamento' />

    </div>

    <div className='bloco2'>

        <img src='https://www.tuacasa.com.br/wp-content/uploads/2019/05/festa-country-capa.jpg' alt='Festa Country' />

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

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEFemScXUlUUNJWPRd1nOG3fs7Uwcd1c6Wg&s' alt='Festa de Anos 50' />
    </div>

</div>

<Footer />

        </div>
        
        
        
    )

} 


        
        



        
