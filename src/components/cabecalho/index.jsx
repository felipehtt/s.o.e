import './index.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Cabecalho() {

    const location = useLocation();

    return (

        <div className='comp-cabecalho'>

            <img src="/assets/images/logo-soe.png" alt="" />

            <div className='nav'>

                <a href="/" className={location.pathname === '/' ? 'active' : 'links'}>Home</a>

                <a href="/soe" className={location.pathname === '/soe' ? 'active' : 'links'}>S.O.E</a>

                <a href="/festas" className={location.pathname === '/festas' ? 'active' : 'links'}>Festas</a>

                <a href="/comunidade" className={location.pathname === '/comunidade' ? 'active' : 'links'}>Comunidade</a>

                <a href="" className={location.pathname === '/' ? 'active' : 'links'}>Contato</a>

                <a href="/faq" className={location.pathname === '/faq' ? 'active' : 'links'}>FAQ</a>


                {/* <Link to='/intencao' className={location.pathname === '' ? 'active' : 'links'}>Intenção</Link> */}

            </div>

        </div>

    );

} 