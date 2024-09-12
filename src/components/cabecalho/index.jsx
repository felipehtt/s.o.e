import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho(){

    return(

        <div className='comp-cabecalho'>

            <img src="/assets/images/logo-soe.png" alt="" />

            <div className='nav'>
                <Link className='links' to='/'>Home</Link>

                <Link className='links' to=''>S.O.E</Link>

                <Link className='links' to=''>Festas</Link>

                <Link className='links' to='/'>Intenção</Link>
            </div>

        </div>

    );

} 