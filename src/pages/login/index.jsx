import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// const [nome, setNome] = useState('');
// const [senha, setSenha] = useState('');

// async function salvar() {
//     const paramCorpo = {
//         "nome": nome,
//         "senha": senha
//     }

//     const url = 'http://localhost:7000/login';
//     let resp = await axios.post(url, paramCorpo);


// }

export default function Login() {

    return (

        <div className='pagina-login'>

            <Link className='seta' to='/'><FontAwesomeIcon icon={faArrowLeft} /></Link>

            <div className='meio'>
                <img src="/assets/images/logo-soe-com-algo-escrito-removebg-preview.png" alt="" />

                <h1>Seja bem-vindo(a) ao login do administrador.</h1>

                <div className='inputs'>

                    <input type="text" placeholder='Nome:' />

                    <input type="password" placeholder='Senha:' />


                    <button>
                        Enviar
                    </button>

                </div>

            </div>



        </div>

    );

}