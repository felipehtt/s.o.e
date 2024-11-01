import './index.scss';

export default function Enderecos(props){

    return(
    
        <div className='comp-enderecos'>

            <h2>{props.logradouro}</h2>

            <p>{props.bairro}</p>

            <p>{props.regiao}</p>

            <p>{`${props.estado} ${props.uf}`}</p>

        </div>

    );

}