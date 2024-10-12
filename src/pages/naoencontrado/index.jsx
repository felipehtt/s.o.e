import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrado() {

    const navigate = useNavigate();

    function voltar(){

        navigate('/');

    }



    return (

        <div className='pagina-naoEncontrado' onClick={voltar}>

            <section>

            <h1>Ops!</h1>

            <h3>Está página não foi encontrada.</h3>

            </section>

            <img src="/assets/imageErro/exis.webp" alt="" />

            <p>Clique em qualquer lugar e volte a navegar</p>

        </div>

    );

}