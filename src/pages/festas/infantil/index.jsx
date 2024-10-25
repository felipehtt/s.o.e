import './index.scss';


import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';

export default function Infantil() {

    return (

        <div className='pagina-infantil pagina'>

            <Cabecalho />
            <div className='static'>
                <img src='https://9d7c09287c4288e19f59-b859ebfd8a2b6bdc3dc0b015f1ecd2e3.ssl.cf1.rackcdn.com/PostImagem/38949/festa-dupla-com-tema-disney-festa-infantil-curitiba_o1errdsg59i4jc0l9e9fus1hub18.jpg'
                    alt=''
                />
            </div>



            <div className='blocos'>
                <h2>Algumas de nossas Festas Infantis</h2>

                <div className='bloco1'>
                    <div className='textos'>
                        <h5>Heróis</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed aut quis, adipisci expedita autem unde reiciendis voluptas molestiae voluptatibus? Fuga iste similique repudiandae, vero ducimus ex laudantium voluptates sit.</p>
                    </div>

                    <img src='https://www.artealegria.com.br/wp-content/uploads/2019/06/DSC_0524-1.jpg' alt='Festa de Heróis' />
                </div>

                <div className='bloco2'>

                    <img src='https://festacleanchic.com/wp-content/uploads/2017/12/24991272_10156091209725921_6740559705137476078_n.jpg' alt='Festa de Esporte' />

                    <div className='textos'>
                        <h5>Esportes</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed aut quis, adipisci expedita autem unde reiciendis voluptas molestiae voluptatibus? Fuga iste similique repudiandae, vero ducimus ex laudantium voluptates sit.</p>
                    </div>


                </div>

                <div className='bloco3'>
                    <div className='textos'>
                        <h5>Safari</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed aut quis, adipisci expedita autem unde reiciendis voluptas molestiae voluptatibus? Fuga iste similique repudiandae, vero ducimus ex laudantium voluptates sit.</p>
                    </div>

                    <img src='https://www.tuacasa.com.br/wp-content/uploads/2018/11/festa-safari.jpg' alt='Festa de Safari' />
                </div>
            </div>



            <Footer />

        </div>

    );

}