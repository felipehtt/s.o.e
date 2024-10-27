import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Dashboard() {

    const [active, setActive] = useState('Festas');

    const navItems = ["Festas", "Usuários", "Intenções", "Financeiro"];

    return (

        <div className='pagina-dashboard'>

            <Cabecalho />

            <div className='tit'>

                <h1>Seja bem-vindo(a) ao Dashboard do Administrador!</h1>
                
            </div>

            <div className="dash-container">

                <div className="sidebar">

                    <div className="user-profile">

                        <img width='60px' src="assets/images/logo-soe.png" alt="Logo" />

                        <div>
                            <p className="username">Zuleica</p>

                            <p className="user-role">Admin</p>
                        </div>

                    </div>

                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className={`nav-item ${active === item ? "active" : ""}`}
                                onClick={() => setActive(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className='but'>

                        <button>Log Out</button>

                    </div>

                </div>

                <div className="dashboard-content">

                    <h1>{active}</h1>

                    <p>
                        {active === "Festas"
                            ? "Cadastre e consulte as festas que fará neste mês."
                            : `Veja aqui a seção: ${active}.`}
                    </p>

                </div>

            </div>

            <Footer />

        </div>

    );

}