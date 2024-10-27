import { useState } from 'react';
import './index.scss';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Cabecalho() {

    const location = useLocation();

    return (

        <div className='comp-cabecalho'>

            <Link to={'/login'} className='img'><img src="/assets/images/logo-soe.png" alt="" /></Link>

            <header className='head'>

                <button className='menu-toggle' onClick={Menu}>
                    ☰
                </button>

                <div className={`nav ${menuOpen ? 'open' : ''}`}>

                    <a href="" className={location.pathname === '/' ? 'active' : 'link'}>

                        <Link to='/' className={location.pathname === '/' ? 'active' : 'link'}>Home</Link>

                    </a>

                    <a href="" className={location.pathname === '/soe' ? 'active' : 'link'}>

                        <Link to='/soe' className={location.pathname === '/soe' ? 'active' : 'link'}>S.O.E</Link>

                    </a>

                    <a href="" className={location.pathname === '/festas' ? 'active' : 'link'}>

                        <Link to='/festas' className={location.pathname === '/festas' ? 'active' : 'link'}>Festas</Link>

                    </a>

                    <a href="" className={location.pathname === '/comunidade' ? 'active' : 'link'}>

                        <Link to='/comunidade' className={location.pathname === '/comunidade' ? 'active' : 'link'}>Comunidade</Link>

                    </a>

                <a href="" className={location.pathname === '/' ? 'active' : 'links'}>Contato</a>

                <a href="/faq" className={location.pathname === '/faq' ? 'active' : 'links'}>FAQ</a>


                {/* <Link to='/intencao' className={location.pathname === '' ? 'active' : 'links'}>Intenção</Link> */}

                </div>

            </header>

        </div>

        // <div className='comp-cabecalho'>

        //     <img src="/assets/images/logo-soe.png" alt="" />

        //     <header className='head'>

        //         <div className='nav'>

        //             <a href="" className={location.pathname === '/' ? 'active' : 'link'}><Link to='/' className={location.pathname === '/' ? 'active' : 'link'}>Home</Link></a>

        //             <a href="" className={location.pathname === '/soe' ? 'active' : 'link'}><Link to='/soe' className={location.pathname === '/soe' ? 'active' : 'link'}>S.O.E</Link></a>

        //             <a href="" className={location.pathname === '/festas' ? 'active' : 'link'}><Link to='/festas' className={location.pathname === '/festas' ? 'active' : 'link'}>Festas</Link></a>

        //             <a href="" className={location.pathname === '/comunidade' ? 'active' : 'link'}><Link to='/comunidade' className={location.pathname === '/comunidade' ? 'active' : 'link'}>Comunidade</Link></a>

        //             <a href="" className={location.pathname === '/' ? 'active' : 'link'}><Link to='/' className={location.pathname === '/' ? 'active' : 'link'}>Contato</Link></a>

        //             <a href="" className={location.pathname === '/faq' ? 'active' : 'link'}><Link to='/faq' className={location.pathname === '/faq' ? 'active' : 'link'}>FAQ</Link></a>

        //             <a href="/intencao" className='but'><Link to='/intencao' className='but2'>Faça sua Intenção</Link></a>

        //         </div>

        //     </header>

        // </div>

    );

} 