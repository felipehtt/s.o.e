import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';



export default function Jovens() {

    return (

        <div className='pagina-jovens pagina'>

            <Cabecalho />

            <div className='static'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBCW5GIAhi92wQLVtSTzG6HD99c30FEsXDw&s' alt=''
              />
            </div>

            <div className='blocos'>
                
            <h2>Alguma de nossas festas para Adolescentes</h2>

            <div className='bloco1'>

               
           
                <img src="https://curitifestas.com.br/wp-content/uploads/2023/11/Decoracao-15-anos-Beatriz.jpeg?v=1705844675" alt="" />
            <div className='textos'>

                <h2> festas de 15 anos   </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus odit incidunt et illum dolores blanditiis sit illo quas fuga aut, optio quae. Consectetur incidunt in, neque quia sapiente quam.</p>
                </div> 
                </div>

            <div className='bloco2'>

        <div className='textos'>

        <h2>Halloween   </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor earum ipsum voluptatibus magni eum, reprehenderit mollitia explicabo! Molestias doloribus perferendis dolorem ipsam enim quis cumque odit blanditiis, velit commodi excepturi?</p>
        </div>

        <img src="https://cdn.shopify.com/s/files/1/0533/3906/2441/files/3_77066389-f07c-4175-85b4-28b26024fdc9.jpg?v=1664437871" alt="" />
        </div>
           

        <div className='bloco3'>

        

        <img src="https://i.pinimg.com/564x/18/be/65/18be651e5492fe478810d6a0ed08fbb0.jpg" alt="" />
        <div className='textos'>

        <h2>Neon    </h2>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque praesentium, molestiae quasi tenetur dolor, dolorum quidem impedit accusantium exercitationem non rem distinctio consectetur iure autem tempora quaerat commodi itaque temporibus.</p>
        </div>
        </div>
           
           
           
           
            </div>

        
            <Footer />
        </div>

    );

}