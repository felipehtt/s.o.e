import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho(){

    return(

        <div className='comp-cabecalho'>

            <Link to='/'>Home</Link>

            <Link to=''>S.O.E</Link>

            <Link to=''>Festas</Link>

            <Link to='/'>Agendamento</Link>

        </div>

    );

} 