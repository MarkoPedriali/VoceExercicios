import * as Dt from './styledDt';
import { Api } from '../../api/Api';
import { useHistory } from 'react-router';
import { Titulo } from '../../componentes/titulo/Titulo';
import Loading from '../../componentes/loading/Loading';
import { useState } from 'react';


export default function DeletarTudo(){

    const history = useHistory();
    const [loading, setLoading] = useState(false);

     const IrParaHome = () => {
         history.push('/');
     }

     const clickHandler = async event => {
         setLoading(true);
         event.preventDefault();

         await Api.buildApiDeleteRequest(Api.deletarTudoUrl()).catch(
             e => {console.error('Erro ao tentar remover os registros. Tente mais tarde', e)}
         )
         IrParaHome();
     }

    return(
        <>
            <>
            {loading === true ? (
            <Loading/> ) : (
                <>

                <h1>Deletar tudo</h1>
                <Dt.Texto>Todos os registros serão apagados definitivamente. Deseja continuar?</Dt.Texto>
            
                <Dt.BotaoArea>
                    <Dt.Cancelar onClick={IrParaHome}>Cancelar</Dt.Cancelar>
                    <Dt.BotaoDelete onClick={clickHandler}>Deletar</Dt.BotaoDelete>
                </Dt.BotaoArea>
                
                </>

            ) }
             </>
        </>
    )
}