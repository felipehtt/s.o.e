import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/footer'
import Fly from '../../components/flying'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Comunidade() {

    return (

        <div className='pagina-comunidade pagina'>

            <Cabecalho />

            <Fly />

            <div className='titulo'>

                <h2>Comunidade</h2>

            </div>

            <main>

                <div className='comunidade'>

                    <div className='cont'>

                        <div className='bloco'>

                            <h2>O que é a Comunidade?</h2>

                            <p>A comunidade é um local onde a SOE pode interagir com o
                                usuário pela comunidade do WhatsApp, lá postaremos
                                atualizações sobre novas festas e novidades da empresa.</p>


                        </div>

                        <div className='icon'>

                            <FontAwesomeIcon icon={faWhatsapp} size='6x' color='green' />

                        </div>


                    </div>

                    <div className='but'>

                        <h2>Entre Aqui:</h2>

                        <button><a href="/festas">Comunidade</a></button>

                    </div>

                </div>

            </main>

            <Footer />

        </div>



    )

}