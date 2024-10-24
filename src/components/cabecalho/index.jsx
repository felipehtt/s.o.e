import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Cabecalho() {

    const location = useLocation();

    const [darkMode, setDarkMode] = useState(false);

  function theme() {

    setDarkMode(!darkMode);

  };

    return (

        <div className='comp-cabecalho'>

            <img src="/assets/images/logo-soe.png" alt="" />

            <div className='nav'>

                <Link to='/' className={location.pathname === '/' ? 'active' : 'links'}>Home</Link>

                <Link to='/soe' className={location.pathname === '/soe' ? 'active' : 'links'}>S.O.E</Link>

                <Link to='/festas' className={location.pathname === '/festas' ? 'active' : 'links'}>Festas</Link>

                <Link to='/intencao' className={location.pathname === '/intencao' ? 'active' : 'links'}>Intenção</Link>

                <div className={darkMode ? 'comp-cabecalho dark' : 'comp-cabecalho light'}>

                    <button onClick={theme}>

                        {darkMode ? 'Mudar para Claro' : 'Mudar para Escuro'}

                    </button>

                </div>
            </div>

        </div>

    );

} 