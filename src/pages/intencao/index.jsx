import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';


export default function Intencao() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [dataIntencao, setDataIntencao] = useState('');


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

        alert('Pessoa adicionada na Intenções. Id: ' + resp.data.idIntencao);

    }

    return (

        <div className='pagina-intencao pagina'>

            <Cabecalho />

            <div className='top'>
                <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>Preencha esse formulário para sua intenção.</h1>
            </div>

            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' placeholder='Seu Nome' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='text' placeholder='(11)12345-1234' value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                <div>
                    <label>CEP:</label>
                    <input type='text' placeholder='12345-123' value={cep} onChange={e => setCep(e.target.value)} />
                </div>
                <div>
                    <label>Data da Festa:</label>
                    <input type='text' placeholder='05/05/2024' value={dataFesta} onChange={e => setDataFesta(e.target.value)} />
                </div>
                <div>
                    <label>Tipo da Festa:</label>
                    <input type='text' placeholder='Casamento' value={tipoFesta} onChange={e => setTipoFesta(e.target.value)} />
                </div>
                <div>
                    <label>Tema da Festa:</label>
                    <input type='text' placeholder='Heróis' value={temaFesta} onChange={e => setTemaFesta(e.target.value)} />
                </div>
                <div>
                    <label>Data Intenção</label>
                    <input type='text' value={dataIntencao} onChange={e => setDataIntencao(e.target.value)} />
                </div>
            </div>
            <button onClick={salvarIntencao}> Enviar </button>


            <Footer />

        </div>

    );

}