import {Route, Switch } from 'react-router-dom';
import * as C from './styledC';
import LerTodos from '../../paginas/criar/lertodos/LerTodos';
import Criar from '../../paginas/criar/Criar';
import lerUm from '../../paginas/lerUm/lerUm';
import DeletarTudo from '../../paginas/deletarTds/deletarTudo';
import DeletarUm from '';
import AtualizarUm from '';


export default function Container(){
    return(
        <>
        <C.Container>
            <C.Lateral></C.Lateral>
            <C.Conteudo>
                <Switch>
                    <Route exact={true} path="/" component={LerTodos}/>
                    <Route path="/criar" component={Criar}/>
                    <Route path="/ver/:id" component={lerUm}/>
                    <Route path="/deletar" component={DeletarTudo}/>
                    <Route path="/deletar/:id" component={DeletarUm}/>
                    <Route path="/atualizar/:id" component={AtualizarUm}/>
                </Switch>
            </C.Conteudo>
        </C.Container>
        </>
    )
}