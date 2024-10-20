import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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

        alert('Intenção enviada com sucesso!');

    }

    return (

        <div className='pagina-intencao pagina'>

            <Cabecalho />

            <div className='top'>
                <h1>Preencha esse formulário para sua intenção.</h1>
            </div>

            <div className='form'>
                <div>
                    <input type='text' placeholder='Nome Completo:' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Telefone:' value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Cep:' value={cep} onChange={e => setCep(e.target.value)} />
                </div>
                <div>
                    <input type='date' placeholder='Data da Festa:' value={dataFesta} onChange={e => setDataFesta(e.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Tipo da Festa:' value={tipoFesta} onChange={e => setTipoFesta(e.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Tema da Festa:' value={temaFesta} onChange={e => setTemaFesta(e.target.value)} />
                </div>
                <div>
                    <input type='date' placeholder='Data da Intenção:' value={dataIntencao} onChange={e => setDataIntencao(e.target.value)} />
                </div>

            </div>

            <div className='but'>

                <button onClick={salvarIntencao}> ENVIAR </button>

            </div>

            <div className='cardW'>

                <p> Após enviar, em breve entraremos em contato com você por Whatsapp:</p>
                <a href=""><FontAwesomeIcon icon={faWhatsapp} size='3x'color='green'/></a>

            </div>


            <Footer />

        </div>

    );

}