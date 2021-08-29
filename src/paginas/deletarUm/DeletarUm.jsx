import * as Du from './styledDu';
import Loading from '../../componentes/loading/Loading';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Api } from '../../api/Api';


export default function DeletarUm(props){

    const item = props.location.state;
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const irParaHome = () =>{
        history.push('/');
    }

    const irParaItem = () =>{
        history.push(`/ver/${item._id}`, item);
    }

    const clickHandler = async event =>{
        setLoading(true);
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deletarUmURL(item._id)).catch(e =>{
            console.error('Erro ao tentar deletar o item', e);
        })
        irParaHome();
    }
    

    return(
        <>
            {loading === true ? (
            <Loading/> ) : (
                <>

                <Du.Title>Deletar</Du.Title>
                <Du.Texto>Apagar <span>"{item.nome}"</span> da lista de exercícios. Deseja continuar?</Du.Texto>
            
                <Du.BotaoArea>
                    <Du.Cancelar onClick={irParaItem}>Cancelar</Du.Cancelar>
                    <Du.BotaoDelete onClick={clickHandler}>Deletar</Du.BotaoDelete>
                </Du.BotaoArea>
                
            </>

            ) }
        </>
    )
}