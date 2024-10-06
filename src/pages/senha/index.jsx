import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Senha() {

    return (

        <div className='pagina-senha'>

            <Link className='seta' to='/login'><FontAwesomeIcon icon={faArrowLeft} /></Link>

            <div className='meio'>
                <img src="/assets/images/logo-soe-com-algo-escrito-removebg-preview.png" alt="" />

                <h1>Alterar senha!</h1>

                <div className='inputs'>

                    <input type="text" placeholder='E-mail:' />

                    <input type="password" placeholder='Nova Senha:' />

                    <input type="password" placeholder='Confirmar Senha:' />

                    <button>
                        Enviar
                    </button>

                    <p>Confirme no seu e-mail.</p>

                </div>

            </div>



        </div>

    );

}