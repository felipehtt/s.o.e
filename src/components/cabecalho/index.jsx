import './index.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Cabecalho() {

    const location = useLocation();

    return (

        <div className='comp-cabecalho'>

            <img src="/assets/images/logo-soe.png" alt="" />

            <div className='nav'>

                <Link to='/' className={location.pathname === '/' ? 'active' : 'links'}>Home</Link>

                <Link to='/soe' className={location.pathname === '/soe' ? 'active' : 'links'}>S.O.E</Link>

                <Link to='/festas' className={location.pathname === '/festas' ? 'active' : 'links'}>Festas</Link>

                <Link to='/intencao' className={location.pathname === '' ? 'active' : 'links'}>Intenção</Link>

                <Link to='/intencao' className={location.pathname === '' ? 'active' : 'links'}>Comunidade</Link>

                <Link to='/intencao' className={location.pathname === '' ? 'active' : 'links'}>Contato</Link>
            
                <Link to='/faq' className={location.pathname === '' ? 'active' : 'links'}>FAQ</Link>
            
            </div>

        </div>

    );

} 