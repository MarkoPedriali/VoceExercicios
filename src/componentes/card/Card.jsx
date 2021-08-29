import * as Cd from './styledCard';

export default function Card(props){


    return(
        <>
        <Cd.CardArea>
            <>
            {
                props.nome =='Supino' ? (
                    <Cd.CardImg src="https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif"></Cd.CardImg>

                ) : props.nome =='Extensora' ? (
                    <Cd.CardImg src="https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif"></Cd.CardImg>
                ) : props.nome =='Crucifixo' ? (
                    <Cd.CardImg src="https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-cabo-banco-inclinado.gif"></Cd.CardImg>
                ) : props.nome =='CrossOver' ? (
                    <Cd.CardImg src="https://1.bp.blogspot.com/-hwS7AHd3joY/YQc5Fm85A4I/AAAAAAAADsI/hRm8TOBh83gn8NnjWjANJT0O4qMo327KwCLcBGAsYHQ/s720/Heel-Tap.gif"></Cd.CardImg>
                ) : props.nome == 'PullOver' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pullover-com-halter-e-bracos-flexionados.gif'></Cd.CardImg>
                ) : props.nome == 'Remada lateral' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif'></Cd.CardImg>
                ) : props.nome == 'Adutora' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif'></Cd.CardImg>
                ) : props.nome == 'Agachamento' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-com-barra.gif'></Cd.CardImg>
                ) : props.nome == 'Afundo' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-com-barra.gif'></Cd.CardImg>
                ) : props.nome == 'Barra Fixa' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2016/08/costas-barra-fixa-fechada-chinup.gif'></Cd.CardImg>
                ) : props.nome == 'Leg Press' ? (
                    <Cd.CardImg src='https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional-90-graus.gif'></Cd.CardImg>
                ) : (
                    <Cd.CardImg src={props.url}></Cd.CardImg>
                )    
            }
            </>
            <Cd.Nome>{props.nome}</Cd.Nome>
        </Cd.CardArea>
        </>
    )
}