import './index.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Fly from '../../components/flying'
import axios from 'axios';
import moment from 'moment/moment';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

import { useEffect, useState } from 'react';


export default function Intencao() {

    const [token, setToken] = useState(null);

    useEffect(() => {

        let token = localStorage.getItem('ADM');

        setToken(token);
        
    })

    const [nomeCliente, setNomeCliente] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [dataIntencao, setDataIntencao] = useState('');

    const navigate = useNavigate();

    const { id } = useParams();

    const handleAlert = () => {
        Swal.fire({
            title: 'Intenção feita!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Sua intenção foi enviada!',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass:{
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const handleAlertPut = () => {
        Swal.fire({
            title: 'Intenção alterada!',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Sua intenção foi alterada com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass:{
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    const handleAlertErr = () => {
        Swal.fire({
            title: 'Falha na intenção',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Preencha todos os campos, ou verifique as datas',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass:{
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    async function salvarIntencao() {
        
        const paramIntention = {
            "nomeCliente": nomeCliente,
            "telefone": telefone,
            "cep": cep,
            "dataFesta": dataFesta,
            "tipoFesta": tipoFesta,
            "temaFesta": temaFesta,
            "dataIntencao": dataIntencao
        }
        
        if(id == undefined){
            
            try {
                
                const url = 'http://4.172.207.208:5026/intencao';
                let resp = await axios.post(url, paramIntention);
                
                if(resp.data.erro != undefined){
                    handleAlertErr();
                }
                else{
                    handleAlert();
                }
                
            }
            catch(err){
                handleAlertErr();
            }

        }
        else{

            try {
            
                const url = `http://4.172.207.208:5026/intencao/${id}`;
                let resp = await axios.put(url, paramIntention);
    
                if(resp.data.erro != undefined){
                    handleAlertErr();
                }
                else{
                    handleAlertPut();
                }
    

            }
            catch(err){
                handleAlertErr();
            }

            navigate('/dashboard');

        }

    }

    async function buscarInfo(){

        if(id != undefined){

            const url = `http://4.172.207.208:5026/intencao/${id}`;
            let resp = await axios.get(url);

            let dados = resp.data;

            let dateOne = moment(dados.dataFesta).format('YYYY-MM-DD');

            let dateTwo = moment(dados.dataIntencao).format('YYYY-MM-DD');

            setNomeCliente(dados.nomeCliente);
            setTelefone(dados.telefone);
            setCep(dados.cep);
            setDataFesta(dateOne);
            setTipoFesta(dados.tipoFesta);
            setTemaFesta(dados.temaFesta);
            setDataIntencao(dateTwo);

        }

    }

    useEffect(() => {

        let token = localStorage.getItem('ADM')
        setToken(token);

        if(token == 'null'){
            navigate('/intencao');
        }

        buscarInfo();

    }, [])



    return (

        <div className='pagina-intencao pagina'>

            <Cabecalho />

            <Fly />

            <h2 className='title'>{id ? "Edite a sua intenção" : "Preencha esse formulário para sua intenção."}</h2>

            <div className='conteudo'>

                <div className='top'>

                    <h1>Intenção?</h1>

                    <p>Este formulário funciona como um interesse em contratar o serviço, sem compromisso nenhum você pode enviá-lo. Após enviar, em breve entraremos em contato com você por Whatsapp para formalizar seu interesse; verificar a disponibilidade do serviço interessado, verificar a localidade e seu espaço, acertar preços, entre outras burocracias.</p>
                    <p>
                        Se estiver em dúvida sobre as opções de festas que oferecemos, Clique Abaixo
                    </p>

                    <div className='but'>

                       <Link to='/festas'> <button> Ver Festas </button> </Link> 

                    </div>
                </div>

                <div className='form'>
                    <div>
                        <label htmlFor="nome">Nome Completo</label>
                        <input type='text' placeholder='Felipe Soares' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone</label>
                        <input type='text' placeholder='(xx)xxxxx-xxxx' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="cep">CEP</label>
                        <input type='text' placeholder='xxxxx-xxx' value={cep} onChange={e => setCep(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="data festa">Data da Festa</label>
                        <input type='date' value={dataFesta} onChange={e => setDataFesta(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tipo">Tipo da Festa</label>
                        <input type='text' placeholder='Infantil' value={tipoFesta} onChange={e => setTipoFesta(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tema">Tema da Festa</label>
                        <input type='text' placeholder='Heróis' value={temaFesta} onChange={e => setTemaFesta(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="data intenção">Data da Intenção</label>
                        <input type='date' value={dataIntencao} onChange={e => setDataIntencao(e.target.value)} />
                    </div>

                    <div className='but'>

                        <button onClick={salvarIntencao}> ENVIAR </button>

                    </div>
                </div>



            </div>



            <div className='cardW'>

                <p>Caso queira fazer o agendamento da sua Festa diretamente e em pouco tempo, Clique no ícone do WhatsApp:</p>
                <a href="https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size='3x' color='green' /></a>

            </div>


            <Footer />

        </div>

    );

}