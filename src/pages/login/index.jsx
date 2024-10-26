import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
    
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();

    const handleAlert = () => {
        Swal.fire({
            title: 'Erro no login',
            color: "#db4545",
            iconColor: "#db4545",
            background: "#000",
            text: 'Usuario ou senha incorretos!',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: "#db4545",
            customClass:{
                confirmButton: 'custom-confirm-button',
            },
        });
    };

    async function login() {

        const adm = {
            "nome": nome,
            "senha": senha
        }
    
        const url = 'http://localhost:7000/login';
        let resp = await axios.post(url, adm);
    
        if(resp.data.error != undefined){

            handleAlert();
        }
        else{

            localStorage.setItem('ADM', resp.data.token);
            navigate('/dashboard');

        }

    }

    return (
        
        <div className='pagina-login'>

            <Link className='seta' to='/'><FontAwesomeIcon icon={faArrowLeft}/></Link>

            <div className='meio'>
                <img src="/assets/images/logo-soe-com-algo-escrito-removebg-preview.png" alt="" />

                <h1>Seja bem-vindo(a) ao login do administrador.</h1>

                <div className='inputs'>

                    <input type="text" value={nome} placeholder='Nome:' onChange={e => setNome(e.target.value)}/>

                    <input type="password" value={senha} placeholder='Senha:' onChange={e => setSenha(e.target.value)}/>

                    <button onClick={login}>Entrar</button>

                </div>

            </div>



        </div>

    );

}