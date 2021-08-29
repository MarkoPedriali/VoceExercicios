import * as NV from './styledB';
import logo from './logo.png'

export default function NavBar(){
    return(
        <NV.NavBar>
            <NV.Img src={logo} alt="Você Exercícios"/>
            <NV.Lista>
                <NV.ListaItem>
                    <NV.LinkPag to="/">Início</NV.LinkPag>
                </NV.ListaItem>
                <NV.ListaItem>
                    <NV.LinkPag to="/criar">Criar</NV.LinkPag>
                </NV.ListaItem>
                <NV.ListaItem>
                    <NV.LinkPag to="/deletartodos">Deletar</NV.LinkPag>
                </NV.ListaItem>
                <NV.ListaItem>
                    <NV.LinkPag to="/sobre">Sobre</NV.LinkPag>
                </NV.ListaItem>
            </NV.Lista>
       </NV.NavBar>
    )
}