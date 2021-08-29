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

    const cancelHandler = async event => {
        event.preventDefault();
        history.push('/');
    }

    
    return(
        <>
        <Lu.Title>{item.nome}</Lu.Title>
        <Lu.Card>
             <Lu.ImgBloco>
             {
                item.nome ==='Supino' ? (
                    <Lu.Img src="https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif"></Lu.Img>

                ) : item.nome ==='Extensora' ? (
                    <Lu.Img src="https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif"></Lu.Img>
                ) : item.nome ==='Crucifixo' ? (
                    <Lu.Img src="https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-cabo-banco-inclinado.gif"></Lu.Img>
                ) : item.nome ==='CrossOver' ? (
                    <Lu.Img src="https://1.bp.blogspot.com/-hwS7AHd3joY/YQc5Fm85A4I/AAAAAAAADsI/hRm8TOBh83gn8NnjWjANJT0O4qMo327KwCLcBGAsYHQ/s720/Heel-Tap.gif"></Lu.Img>
                ) : item.nome === 'PullOver' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pullover-com-halter-e-bracos-flexionados.gif'></Lu.Img>
                ) : item.nome === 'Remada lateral' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif'></Lu.Img>
                ) : item.nome === 'Adutora' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif'></Lu.Img>
                ) : item.nome === 'Agachamento' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-com-barra.gif'></Lu.Img>
                ) : item.nome === 'Afundo' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-com-barra.gif'></Lu.Img>
                ) : item.nome === 'Barra Fixa' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2016/08/costas-barra-fixa-fechada-chinup.gif'></Lu.Img>
                ) : item.nome === 'Leg Press' ? (
                    <Lu.Img src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional-90-graus.gif'></Lu.Img>
                ) : (
                    <Lu.Img src={props.url}></Lu.Img>
                )    
            }
            </Lu.ImgBloco> 
    
            <Lu.Texto><strong>Exercício</strong>: {item.nome}</Lu.Texto>
            <Lu.Texto><strong>Número de séries</strong>: {item.series}</Lu.Texto>
            <Lu.Texto><strong>Número de repetições</strong>: {item.reps}</Lu.Texto>

            <Lu.AreaBotao>
                <Lu.BEditar onClick={editHandler}>Editar</Lu.BEditar>
                <Lu.BDeletar onClick={deleteHandler}>Deletar</Lu.BDeletar>
                <Lu.BCancelar onClick={cancelHandler}>Cancelar</Lu.BCancelar>
            </Lu.AreaBotao>
        </Lu.Card>
        </>

    )
}