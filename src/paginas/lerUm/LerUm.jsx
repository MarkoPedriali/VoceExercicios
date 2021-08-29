import * as Lu from './styledLu';
import { useHistory } from 'react-router';



export default function LerUm(props){

    
    const item = props.location.state;
    
    const history = useHistory();

    const deleteHandler = async event => {
        event.preventDefault();
        history.push(`/deletar/${item._id}`, item);
    };

    const editHandler = async event => {
        event.preventDefault();
        history.push(`/atualizar/${item._id}`, item);
    };

    
    return(
        <>
        <Lu.Title>{item.nome}</Lu.Title>
        <Lu.Card>
             <Lu.ImgBloco>
                <Lu.Img src={item} alt="Personagem"/>
            </Lu.ImgBloco> 
    
            <Lu.Texto><strong>Exercício: {item.nome}</strong></Lu.Texto>
            <Lu.Texto><strong>Número de séries: {item.series}</strong></Lu.Texto>
            <Lu.Texto><strong>Número de repetições: {item.reps}</strong></Lu.Texto>

            <Lu.AreaBotao>
                <Lu.BEditar onClick={editHandler}>Editar</Lu.BEditar>
                <Lu.BDeletar onClick={deleteHandler}>Deletar</Lu.BDeletar>
            </Lu.AreaBotao>
        </Lu.Card>
        </>

    )
}