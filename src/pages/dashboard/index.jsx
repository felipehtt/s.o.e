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

    const navItems = ["Perfil", "Festas", "Intenções", "Financeiro", "Endereços"];

    const navigate = useNavigate();

    const userName = localStorage.getItem('USERNAME');

    const passWord = localStorage.getItem('PASSWORD');


    const [nomeCliente, setNomeCliente] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [endereco, setEndereco] = useState('');
    const [distanciaLocal, setDistanciaLocal] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [quantidadePessoas, setQuantidadePessoas] = useState('');
    const [precoTotal, setPrecoTotal] = useState('');

    async function salvarFesta(){

        const paramFesta = {

            "nomeCliente": nomeCliente,
            "telefone": telefone,
            "dataFesta": dataFesta,
            "endereco": endereco,
            "distanciaLocal": distanciaLocal,
            "tipoFesta": tipoFesta,
            "temaFesta": temaFesta,
            "quantidadePessoas": quantidadePessoas,
            "precoTotal": precoTotal

        }

    }


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

    async function excluirIntencao(id) {

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


                    {active == 'Perfil' &&

                        <div className='nav-user'>

                            <h2>Meu Perfil</h2>

                            <div className='profile'>

                                <div className='info'>
                                    <label htmlFor="nome">Nome</label>
                                    <p>{userName}</p>
                                </div>

                                <div className='info'>
                                    <label htmlFor="senha">Senha</label>
                                    <p>{passWord}</p>
                                </div>

                            </div>


                        </div>

                    }


                    {active == 'Festas' &&

                        <div className='nav-party'>

                            <section className='post'>

                                <h2>Cadastro de Festas</h2>

                                <div>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="">Telefone</label>
                                    <input type="text" value={telefone}/>
                                </div>
                                <div>
                                    <label htmlFor="">Data da Festa</label>
                                    <input type="date" value={dataFesta}/>
                                </div>
                                <div>
                                    <label htmlFor="">Endereço</label>
                                    <input type="text" value={endereco}/>
                                </div>
                                <div>
                                    <label htmlFor="">Distância média</label>
                                    <input type="text" value={distanciaLocal}/>
                                </div>
                                <div>
                                    <label htmlFor="">Tipo da Festa</label>
                                    <input type="text" value={tipoFesta}/>
                                </div>
                                <div>
                                    <label htmlFor="">Tema da Festa</label>
                                    <input type="text" value={temaFesta}/>
                                </div>
                                <div>
                                    <label htmlFor="">Quantidade de pessoas</label>
                                    <input type="text" value={quantidadePessoas}/>
                                </div>
                                <div>
                                    <label htmlFor="">Valor Total</label>
                                    <input type="text" value={precoTotal}/>
                                </div>

                                <button>CADASTRAR</button>

                            </section>

                            <hr color='#' width="900px" />

                            <section className='get'>

                                <button>Exibir festas</button>

                                <table>

                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Telefone</th>
                                            <th>Data</th>
                                            <th>Endereço</th>
                                            <th>Distância</th>
                                            <th>Tipo</th>
                                            <th>Tema</th>
                                            <th>Quantidade de pessoas</th>
                                            <th>Valor Total</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>

                                    <tbody>


                                    </tbody>

                                </table>

                            </section>

                        </div>

                    }


                    {active == 'Intenções' &&

                        <div className='nav-intention'>

                            <button onClick={buscarIntencoes} className='get-intention'>Buscar intenções</button>

                            <table>
                                <thead>
                                    <tr>
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
                                            <td>{item.nomeCliente}</td>
                                            <td>{item.telefone}</td>
                                            <td>{item.cep}</td>
                                            <td>{new Date(item.dataFesta).toLocaleDateString()}</td>
                                            <td>{item.tipoFesta}</td>
                                            <td>{item.temaFesta}</td>
                                            <td>{new Date(item.dataIntencao).toLocaleDateString()}</td>
                                            <td className='action'>
                                                <Link to={`/intencao/${item.idIntencao}`}><FontAwesomeIcon icon={faUserPen} color='#db4545' /></Link>
                                                <Link onClick={() => excluirIntencao(item.idIntencao)}><FontAwesomeIcon icon={faCalendarXmark} color='#db4545' /></Link>
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