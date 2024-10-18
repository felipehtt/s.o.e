import './index.scss';

import CabecalhoDash from '../../components/cabecalho-dash';
import Footer from '../../components/footer';

export default function Dashboard() {

    return (

        <div className='pagina-dashbaord pagina'>

            <CabecalhoDash />

            <h1>Dashboard</h1>

            <a href="">Cadastrar Evento</a>

            <a href="">Consultar</a>

            <Footer />

        </div>

    );

}