import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import Financeiro from '../../components/financeiro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark, faUserPen } from '@fortawesome/free-solid-svg-icons';


export default function Dashboard() {

    const handleAlertErr = () => {
        Swal.fire({
            title: 'Não encontramos!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Nenhuma intenção salva',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass: {
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const [token, setToken] = useState(null);

    const [listaIntencoes, setListaIntencoes] = useState([])

    const [active, setActive] = useState('Festas');

    const navItems = ["Festas", "Usuários", "Intenções", "Financeiro"];

    const navigate = useNavigate();

    const userName = localStorage.getItem('USERNAME');

    async function buscarIntencoes() {

        try {

            const url = `http://localhost:7000/intencao`;
            let resp = await axios.get(url);

            setListaIntencoes(resp.data);

        }
        catch (err) {
            handleAlertErr();
        }


    }

    async function excluir(id) {

        const url = `http://localhost:7000/intencao/${id}`;
        await axios.delete(url)

        await buscarIntencoes();

    }

    function sair() {

        localStorage.setItem('ADM', null);
        navigate('/');

    }

    useEffect(() => {

        let token = localStorage.getItem('ADM')
        setToken(token);

        if (token == 'null') {
            navigate('/login')
        }

    }, [])

    return (

        <div className='pagina-dashboard pagina'>

            <Cabecalho />

            <div className='tit'>

                <h1>Seja bem-vindo(a) ao Dashboard do Administrador!</h1>

            </div>

            <div className='dash-container'>

                <div className='sidebar'>

                    <div className='user-profile'>

                        <img width='60px' src="assets/images/logo-soe.png" alt="Logo" />

                        <div>
                            <p className='username'>{userName}</p>

                            <p className='user-role'>Admin</p>
                        </div>
                    </div>

                    <ul className='nav-list'>
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className={`nav-item ${active === item ? 'active' : ''}`}
                                onClick={() => setActive(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className='but'>

                        <button onClick={sair}>Log Out</button>

                    </div>

                </div>

                <div className='dashboard-content'>

                    {active == 'Intenções' &&

                        <div className='nav-intention'>

                            <button onClick={buscarIntencoes} className='get-intention'>Buscar intenções</button>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Telefone</th>
                                        <th>CEP</th>
                                        <th>Data da Festa</th>
                                        <th>Tipo da Festa</th>
                                        <th>Tema da Festa</th>
                                        <th>Data da Intenção</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {listaIntencoes.map(item =>

                                        <tr>
                                            <td>{item.idIntencao}</td>
                                            <td>{item.nomeCliente}</td>
                                            <td>{item.telefone}</td>
                                            <td>{item.cep}</td>
                                            <td>{new Date(item.dataFesta).toLocaleDateString()}</td>
                                            <td>{item.tipoFesta}</td>
                                            <td>{item.temaFesta}</td>
                                            <td>{new Date(item.dataIntencao).toLocaleDateString()}</td>
                                            <td className='action'>
                                                <Link to={`/intencao/${item.idIntencao}`}><FontAwesomeIcon icon={faUserPen} color='#db4545' /></Link>
                                                <Link onClick={() => excluir(item.idIntencao)}><FontAwesomeIcon icon={faCalendarXmark} color='#db4545' /></Link>
                                            </td>
                                        </tr>

                                    )}
                                </tbody>


                            </table>


                        </div>

                    }

                    {active == 'Financeiro' &&

                        <Financeiro />

                    }

                </div>

            </div>

            <Footer />
        </div>

    );

}