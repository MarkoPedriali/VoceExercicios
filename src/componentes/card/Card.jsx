import * as Cd from './styledCard';

export default function Card(props){


    return(
        <>
        <Cd.CardArea>
            <>
            {
                props.nome =='Supino' ? (
                    <Cd.CardImg src="https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif"></Cd.CardImg>

                ) : props.nome =='Extensora'? (
                    <Cd.CardImg src="https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif"></Cd.CardImg>
                ) : props.nome =='Crucifixo'?(
                    <Cd.CardImg src="https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-cabo-banco-inclinado.gif"></Cd.CardImg>
                ) : (
                    <Cd.CardImg src={props.nome}></Cd.CardImg>
                )
            }
            </>
            <Cd.Nome>{props.nome}</Cd.Nome>
        </Cd.CardArea>
        </>
    )
}