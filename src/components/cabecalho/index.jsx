import './index.scss'
import { Link } from 'react-router-dom'


export default function Cabecalho() {
    return(
        <div className='parte-cabecalho'>
             <img src='/images/logo.webp' />


             <div className='conexoes'>
             <h3>
                <Link to='/home'>Home</Link>
              </h3>

              <h3>
                <Link to='/s.o.e'>S.O.E</Link>
              </h3>


              <h3>
                <Link to='/festas'>Festas</Link>
             </h3>

              <h3>
                <Link to='/agendamento'>Agendamento</Link>
              </h3>

             </div>


        </div>
       
    )
}