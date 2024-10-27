import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import Fly from '../../../components/flying'

export default function Adulto() {

    return (

        <div className='pagina-adulto pagina'>

            <Cabecalho />

            <Fly />

            <div className='static'>

                <img src='https://i.pinimg.com/originals/6a/d8/5b/6ad85bf9a8d499a9c21a9432888d256c.jpg' alt='' />

            </div>

            <div className='blocos'>

                <h2>Algumas de nossas Festas para Adultos</h2>

                <div className='bloco1'>

                    <div className='textos'>

                        <h3>Casamento</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed aut quis, adipisci expedita autem unde reiciendis voluptas molestiae voluptatibus? Fuga iste similique repudiandae, vero ducimus ex laudantium voluptates sit.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <img src='https://lejour.com.br/wp-content/uploads/2021/11/capa-home-wedding.jpg' alt='Festa de Casamento' />

                </div>

                <div className='bloco2'>

                    <img src='https://www.tuacasa.com.br/wp-content/uploads/2019/05/festa-country-capa.jpg' alt='Festa Country' />

                    <div className='textos'>

                        <h3>Country</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed aut quis, adipisci expedita autem unde reiciendis voluptas molestiae voluptatibus? Fuga iste similique repudiandae, vero ducimus ex laudantium voluptates sit.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                </div>

                <div className='bloco3'>

                    <div className='textos'>

                        <h3>Anos 50</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed aut quis, adipisci expedita autem unde reiciendis voluptas molestiae voluptatibus? Fuga iste similique repudiandae, vero ducimus ex laudantium voluptates sit.</p>

                        <a href="/intencao" className='but'>

                            <Link to='/intencao' className='but2'>Gostou? Faça sua Intenção</Link>

                        </a>

                    </div>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEFemScXUlUUNJWPRd1nOG3fs7Uwcd1c6Wg&s' alt='Festa de Anos 50' />
                </div>

            </div>

            <Footer />

        </div>

    );

}