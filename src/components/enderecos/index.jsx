import './index.scss';

export default function Enderecos(props){

    return(
    
        <div className='comp-enderecos'>

            <h2>{props.item.logradouro}</h2>

            <p>{props.item.bairro}</p>

            <p>{props.item.regiao}</p>

            <p>{props.item.estado}, {props.item.uf}</p>

        </div>

    );

}