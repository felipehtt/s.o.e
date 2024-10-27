import { useState } from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Cabecalho() {

    const location = useLocation();

    const [loggedIn, setLoggedIn] = useState(false);

    const loginActive = () => {

        setLoggedIn(true);

    }

    const logOut = () => {

        setLoggedIn(false);

    }

    return (

        <div className='comp-cabecalho'>

            <Link to={'/login'} className='img'><img src="/assets/images/logo-soe.png" alt="" /></Link>

            <div className='nav'>

                <a href="/" className={location.pathname === '/' ? 'active' : 'links'}>Home</a>

                <a href="/soe" className={location.pathname === '/soe' ? 'active' : 'links'}>S.O.E</a>

                <a href="/festas" className={location.pathname === '/festas' ? 'active' : 'links'}>Festas</a>

                <a href="/comunidade" className={location.pathname === '/comunidade' ? 'active' : 'links'}>Comunidade</a>

                <a href="/contato" className={location.pathname === '/contato' ? 'active' : 'links'}>Contato</a>

                <a href="/faq" className={location.pathname === '/faq' ? 'active' : 'links'}>FAQ</a>

                {loggedIn == true && (
                    <a href="/dashboard" className={location.pathname === '/dashboard' ? 'active' : 'links'}>Dashboard</a>
                )}


            </div>

        </div>

    );

} 