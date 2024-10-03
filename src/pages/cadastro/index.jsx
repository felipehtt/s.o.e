import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Cadastro() {

    return (
        
    <div className='pagina-festas pagina'>


            <div className='header'>
            
            <Link className='links' to='/'><FontAwesomeIcon icon={faArrowLeft} color='#ED544C' /></Link>

            </div>

        <div className='meio'>
        <img src="/assets/images/logo-soe-com-algo-escrito-removebg-preview.png" alt="" />

        <h1>Seja bem-vindo(a) ao login do administrador.</h1>

        <div className='inputs'>

            <input type="text" placeholder='E-mail:' />

            <input type="password" placeholder='Senha:'/>

            <button>
                Enviar
            </button>

            </div>
    
    </div>

               
    
    </div>

    );

}