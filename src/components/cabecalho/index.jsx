import './index.scss'
import { Link } from 'react-router-dom'


export default function Cabecalho() {
    return(
        <div className='parte-cabecalho'>
             <img src='/images/logo.webp' />

             <h3>
                <link to='/home'>Home</link>
             </h3>

             <h3>
                <link to='/s.o.e'>S.O.E</link>
             </h3>


             <h3>
                <link to='/festas'>Festas</link>
             </h3>

             <h3>
                <link to='/agendamento'>Agendamento</link>
             </h3>



        </div>
       
    )
}