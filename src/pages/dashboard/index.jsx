import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import Financeiro from '../../components/financeiro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark, faUserPen, faUser, faLock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Enderecos from '../../components/enderecos';


export default function Dashboard() {

    const [listaFestas, setListaFestas] = useState([]);

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [regiao, setRegiao] = useState('');
    const [estado, setEstado] = useState('');
    const[uf, setUf] = useState('');
    
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

    const alertCep = () => {
        Swal.fire({
            title: 'Não encontramos!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Nenhum endereço encontrado!',
            icon: 'warning',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass: {
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const alertGet = () => {
        Swal.fire({
            title: 'Não encontramos!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Nenhuma festa salva',
            icon: 'warning',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass: {
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const Success = () => {
        Swal.fire({
            title: 'Cadastro Feito!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Festa salva com sucesso!',
            icon: 'success',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass: {
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const SuccessPut = () => {
        Swal.fire({
            title: 'Ótimo!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Festa alterada com sucesso!',
            icon: 'success',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass: {
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const Error = () => {
        Swal.fire({
            title: 'Erro no cadastro!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Verifique os campos!',
            icon: 'error',

            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass: {
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const [token, setToken] = useState(true);

    const [listaIntencoes, setListaIntencoes] = useState([])

    const [active, setActive] = useState('Festas');

    const navItems = ['Perfil', 'Festas', 'Intenções', 'Financeiro', 'Endereços'];

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

    const { id } = useParams();

    async function salvarFesta() {

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

        if (id == undefined) {

            try {

                const url = `http://localhost:7000/festa/cadastro?x-access-token=${token}`;
                let resp = await axios.post(url, paramFesta);

                if (resp.data.erro != undefined) {
                    Error()
                }
                else {
                    Success();
                }

            }
            catch (err) {
                Error();
            }

        }
        else {

            try {

                const url = `http://localhost:7000/festa/${id}?x-access-token=${token}`;
                let resp = await axios.put(url, paramFesta);

                if (resp.data.erro != undefined) {
                    Error();
                }
                else {
                    SuccessPut();
                }

            }
            catch (err) {
                Error();
            }

        }

    }

    async function buscarFestas() {

        try {

            const url = `http://localhost:7000/festa?x-access-token=${token}`;
            let resp = await axios.get(url);

            setListaFestas(resp.data);

        }
        catch (err) {
            alertGet();
        }

    }

    async function excluirFesta(id) {

        const url = `http://localhost:7000/festa/${id}?x-access-token=${token}`;
        await axios.delete(url);

        await buscarFestas();

    }


    async function consultar(token) {

        if (id != undefined) {

            const url = `http://localhost:7000/festa/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);

            let dados = resp.data;

            let dateParty = moment(dados.dataFesta).format('YYYY-MM-DD');
            
            setNomeCliente(dados.nomeCliente);
            setTelefone(dados.telefone);
            setDataFesta(dateParty);
            setEndereco(dados.endereco);
            setDistanciaLocal(dados.distanciaLocal);
            setTipoFesta(dados.tipoFesta);
            setTemaFesta(dados.temaFesta);
            setQuantidadePessoas(dados.quantidadePessoas);
            setPrecoTotal(dados.precoTotal);
            
        }
        
    }
    
    async function buscarCep() {

        try {

            const url = `http://viacep.com.br/ws/${cep}/json/`;
            let resp = await axios.get(url);
    
            let dados = resp.data;
    
            if(dados.erro != undefined){
                alertCep();
            }
            else{
                
                setLogradouro(dados.logradouro);
                setBairro(dados.bairro);
                setRegiao(dados.regiao);
                setEstado(dados.estado);
                setUf(dados.uf);
        
                setCep('')

            }
        }
        catch(error){
            alertCep();
        }


    }

    function buscar(e){

        if(e.key == 'Enter'){
            buscarCep();
        }

    }

    useEffect(() => {

        let token = localStorage.getItem('ADM')
        setToken(token);
        
        if (token == 'null') {
            navigate('/login');
        }

        consultar(token);

    }, []);
    

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

        consultar(token);

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

                        <div className='user'>

                            <div className='nav-user'>

                                <div className='profile'>

                                    <h2>Meu Perfil</h2>

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

                        </div>

                    }


                    {active == 'Festas' &&

                        <div className='nav-party'>

                            <section className='post'>

                                <h2>Cadastro de Festas</h2>

                                <div>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Telefone</label>
                                    <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Data da Festa</label>
                                    <input type="date" value={dataFesta} onChange={e => setDataFesta(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Endereço</label>
                                    <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Distância média</label>
                                    <input type="text" value={distanciaLocal} onChange={e => setDistanciaLocal(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Tipo da Festa</label>
                                    <input type="text" value={tipoFesta} onChange={e => setTipoFesta(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Tema da Festa</label>
                                    <input type="text" value={temaFesta} onChange={e => setTemaFesta(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Quantidade de pessoas</label>
                                    <input type="text" value={quantidadePessoas} onChange={e => setQuantidadePessoas(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="">Valor Total</label>
                                    <input type="text" value={precoTotal} onChange={e => setPrecoTotal(e.target.value)} />
                                </div>

                                <button onClick={salvarFesta}>CADASTRAR</button>

                            </section>

                            <hr color='#' width="900px" />

                            <section className='get'>

                                <button onClick={buscarFestas}>Exibir festas</button>

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

                                        {listaFestas.map(item =>

                                            <tr>
                                                <td>{item.nomeCliente}</td>
                                                <td>{item.telefone}</td>
                                                <td>{new Date(item.dataFesta).toLocaleDateString()}</td>
                                                <td>{item.endereco}</td>
                                                <td>{item.distanciaLocal}</td>
                                                <td>{item.tipoFesta}</td>
                                                <td>{item.temaFesta}</td>
                                                <td>{item.quantidadePessoas}</td>
                                                <td>{item.precoTotal}</td>
                                                <td className='action'>
                                                    <Link to={`/dashboard/${item.idFesta}`}><FontAwesomeIcon icon={faUserPen} color='#db4545' /></Link>
                                                    <Link onClick={() => excluirFesta(item.idFesta)}><FontAwesomeIcon icon={faCalendarXmark} color='#db4545' /></Link>
                                                </td>
                                            </tr>

                                        )}

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

                    {active == 'Endereços' &&

                        <div className='nav-address'>

                            <div className='pin'>

                                <h2>Consulte os endereços através do cep</h2>
                                <input type="text" placeholder='Digite o cep' value={cep} onChange={e => setCep(e.target.value)} onKeyUp={buscar}/>
                                <button onClick={buscarCep}><FontAwesomeIcon icon={faMagnifyingGlass}/>Pesquisar</button>

                                <Enderecos 
                                logradouro={logradouro}
                                bairro={bairro}
                                regiao={regiao}
                                estado={estado}
                                uf={uf}/>

                            </div>


                        </div>

                    }

                </div>

            </div>

            <Footer />
        </div>

    );

}