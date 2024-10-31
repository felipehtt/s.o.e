import './index.scss';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../screens/AuthContext';

export default function Cabecalho() {

    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    // const { isAutentic } = useAuth();

    function Menu() {

        setMenuOpen(!menuOpen);

    };


    return (

        <div className='comp-cabecalho'>

            <img src="/assets/images/logo-soe.png" alt="" />

            <header className='head'>

                <button className='menu-toggle' onClick={Menu}>
                    Menu
                </button>

                <div className={`nav ${menuOpen ? 'open' : ''}`}>

                    <Link to='/' className={location.pathname === '/' ? 'active link' : 'link'}>Home</Link>
                    
                    <Link to='/soe' className={location.pathname === '/soe' ? 'active link' : 'link'}>S.O.E</Link>
                    
                    <Link to='/festas' className={location.pathname === '/festas' ? 'active link' : 'link'}>Festas</Link>
                    
                    <Link to='/comunidade' className={location.pathname === '/comunidade' ? 'active link' : 'link'}>Comunidade</Link>
                    
                    <Link to='/contato' className={location.pathname === '/contato' ? 'active link' : 'link'}>Contato</Link>
                    
                    <Link to='/faq' className={location.pathname === '/faq' ? 'active link' : 'link'}>FAQ</Link>
                    
                    <Link to='/intencao' className='but'>Faça sua Intenção</Link>

                </div>

            </header>

        </div>

    );

} 