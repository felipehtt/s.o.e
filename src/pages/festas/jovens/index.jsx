import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import Carrossel from '../../../components/carrossel';



export default function Jovens() {

    return (

        <div className='pagina-jovens pagina'>

            <Cabecalho />

            <div className='top'>

                <img className='imgTop' src="https://media.discordapp.net/attachments/943237040860958720/1299428775011942410/needs_enhancer2.webp?ex=671d2ada&is=671bd95a&hm=fe82ad520b02e73683a284f5854fdfe5f528911cec0cc1d93373119e9e5914ea&=&format=webp" alt="" />

                <h1>Festas De Adolescentes</h1>

            </div>

            <Carrossel />

        </div>

    );

}