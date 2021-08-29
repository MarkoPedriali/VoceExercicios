import * as Lu from './styledLu';
import { useHistory } from 'react-router';


export default function lerUm(props){

    
    const item = props.location.state
    
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
            {item.nome}
            {item.reps}
            {item.series}
        </>

    )
}