import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';



export default function Jovens() {

    return (

        <div className='pagina-jovens pagina'>

            <Cabecalho />

            <div className='static'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBCW5GIAhi92wQLVtSTzG6HD99c30FEsXDw&s' alt=''
              />
            </div>

            <div className='blocos'>
                
            <h2>Alguma de nossas festas para Adolescentes</h2>

            <div className='bloco1'>

                <div className='textos'>

                <h2> festas de 15 anos   </h2>
                <p>sdajkbfdasjhibdiu</p>
                </div>
           
                <img src="https://i.pinimg.com/736x/65/68/57/6568570b99ac76306abf1d98fbe8982c.jpg" alt="" />
            </div>

            <div className='bloco2'>

        <div className='textos'>

        <h2> festas de 15 anos   </h2>
        <p>sdajkbfdasjhibdiu</p>
        </div>

        <img src="https://i.pinimg.com/736x/65/68/57/6568570b99ac76306abf1d98fbe8982c.jpg" alt="" />
        </div>
           

        <div className='bloco3'>

        <div className='textos'>

        <h2> festas de 15 anos   </h2>
        <p>sdajkbfdasjhibdiu</p>
        </div>

        <img src="https://i.pinimg.com/736x/65/68/57/6568570b99ac76306abf1d98fbe8982c.jpg" alt="" />
        </div>
           
           
           
           
            </div>

        
            <Footer />
        </div>

    );

}