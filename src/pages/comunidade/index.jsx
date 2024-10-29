import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/footer'
import Fly from '../../components/flying'
import './index.scss'


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

                    <div className='bloco'>

                        <h2>O que é a Comunidade</h2>

                        <p>A comunidade é um local onde a SOE pode interagir com o
                            usuário pela comunidade do WhatsApp, lá postaremos
                            atualizações sobre novas festas e novidades da empresa.</p>

                    </div>

                    <img src="https://th.bing.com/th/id/OIP.e2L4oAqaiCuGoo-1AvkSdQHaE8?rs=1&pid=ImgDetMain" alt="" />

                </div>

            </main>

            <Footer />

        </div>



    )

}