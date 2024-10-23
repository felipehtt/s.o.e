import './index.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import axios from 'axios';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

import { useState } from 'react';


export default function Intencao() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [dataIntencao, setDataIntencao] = useState('');

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

    async function salvarIntencao() {

        const paramCorpo = {
            "nome": nome,
            "telefone": telefone,
            "cep": cep,
            "dataFesta": dataFesta,
            "tipoFesta": tipoFesta,
            "temaFesta": temaFesta,
            "dataIntencao": dataIntencao
        }

        const url = 'http://localhost:7000/intencao';
        let resp = await axios.post(url, paramCorpo);

        let dados = resp.data;

        handleAlert();

    }

    return (

        <div className='pagina-intencao pagina'>

            <Cabecalho />

            <h1 className='title'>Preencha esse formulário para sua intenção.</h1>

            <div className='conteudo'>

                <div className='top'>

                    <h1>Intenção?</h1>

                    <p>Este formulário funciona como um interessse em contratar o serviço, sem compromisso nenhum você pode enviá-lo. Após enviar, em breve entraremos em contato com você por Whatsapp para formalizar seu interesse; verificar a disponibilidade do serviço interessado, verificar a localidade e seu espaço, acertar preços, entre outras burocracias.</p>
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
                        <input type='text' placeholder='Felipe Soares' value={nome} onChange={e => setNome(e.target.value)} />
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

                <p> Após enviar, em breve entraremos em contato com você por Whatsapp:</p>
                <a href=""><FontAwesomeIcon icon={faWhatsapp} size='3x' color='green' /></a>

            </div>


            <Footer />

        </div>

    );

}