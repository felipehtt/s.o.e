import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/footer'
import Fly from '../../components/flying'
import './index.scss'
import { SocialIcon } from 'react-social-icons'


export default function Contato() {

    return (

        <div className='pagina-comunidade pagina'>

            <Cabecalho />

            <Fly />

            <div className='titulo'>

                <h2>Contato</h2>

            </div>

            <main>

                <div className='comunidade'>

                    <div className='cont'>

                        <div className='bloco'>

                            <h2>Nossos Contatos</h2>

                            <p>Entre em contato conosco para tirar dúvidas e realizar orçamentos! Estamos disponíveis via WhatsApp para um atendimento rápido e direto, ou, se preferir, envie-nos um e-mail e responderemos o mais breve possível.</p>


                        </div>

                        <div className='social-links'>

                            <a href="https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0" className='social-link' target='_blank'><SocialIcon fallback="whatsapp" bgColor='#db4545' href='https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0' /> WhatsApp</a>
                            <br />
                            <a href="" className='social-link' target='_blank'><SocialIcon fallback="email" bgColor='#db4545' href='' /> Email</a>

                        </div>


                    </div>


                </div>

            </main>

            <Footer />

        </div>



    )

}