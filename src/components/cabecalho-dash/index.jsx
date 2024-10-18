import './index.scss';
import { Link } from 'react-router-dom';

export default function CabecalhoDash() {

    return (

        <div className='comp-cabecalho'>

            <img src="/assets/images/logo-soe.png" alt="" />

            <div className='nav'>

                <Link className='links' to='/' >Home</Link>

                <Link className='links' to='/soe'>S.O.E</Link>

                <Link className='links' to='/festas'>Festas</Link>

                <Link className='links' to='/intencao'>Intenção</Link>

                <Link className='links' to='/dashboard'>Dashboard</Link>

            </div>

        </div>

    );

} 