import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/footer'
import './index.scss'
import { useState } from 'react'


export default function Faq() {
    const [pressionado, setPressionado] = useState(null)


    let change = (i) => {

        if (pressionado === i) {
            return setPressionado(null)

        }
        setPressionado(i)
    }

    const Data = [

        {
            question: 'A SOE aluga lugares para a decoração?',

            answer: 'Não. Não alugamos lugares para festas ou eventos, a SOE apenas decora o lugar escolhido pelo cliente.'

        },

        {
            question: 'Posso escolher qualquer tema para minha festa/evento?',

            answer: 'Sim, sempre somos abrangentes quando o assunto é tema de festas, por isso, o tema é livre de acordo com as leis do país, tirando isso, sempre ofereceremos conforto e identidade independente do tema'

        },

        {
            question: 'Vocês preparam a comida da festa?',

            answer: 'Sim. O que nos diferencia de outras organizadoras de eventos é que nós mesmos cozinhamos a comida que será servida em sua festa'

        },

        {
            question: 'Vocês providenciam talheres, pratos descartáveis e lembrancinhas?',

            answer: 'Sim. Porém cobramos a taxa do custo das lembrancinhas de acordo com a quantidade de pessoas que participarão do evento, a lembrancinha é OPCIONAL!'

        },

        {
            question: 'Vocês fazem decorações por todo o Brasil?',

            answer: 'No momento só fazemos decorações no estado de São Paulo.'

        },




    ]

    return (

        <div className='pagina-faq pagina'>

            <Cabecalho />

            <div className='titulo'>
                <h2>FAQ</h2>
            </div>

            <div className='faq'>

                <div className='textos'>

                    <h1>FAQ?</h1>

                    <p>FAQ é a sigla para Frequently Asked Questions (que, em português, significa “Perguntas Respondidas Frequentemente“), ou seja, diz respeito a uma lista de questões que são dúvidas comuns de usuários, potenciais leads e clientes, respondendo a todas antecipadamente.</p>

                </div>

                <div className='wrapper'>

                    <div className='drop'>

                        {Data.map((item, i) => (

                            <div className='item'>

                                <div className='title' onClick={() => change(i)}>
                                    <h2>{item.question}</h2>
                                    <span> {pressionado === i ? '-' : '+'} </span>
                                </div>

                                <div className={pressionado === i ? 'content show' : 'content'}>
                                    {item.answer}
                                </div>
                            </div>

                        ))}
                    </div>

                </div>

            </div>

            <Footer />

        </div>



    )

}