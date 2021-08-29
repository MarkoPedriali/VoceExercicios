import * as Ld from './styledLd';
import animacao from './animacao.svg';

export default function Loading(){
    return(
        <Ld.Spinner>
            <Ld.Img src={animacao}/>
        </Ld.Spinner>
    )
}