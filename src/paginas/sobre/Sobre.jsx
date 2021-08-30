import * as So from './styledSo';
import perfil from './perfil.jpeg';

export default function Sobre(){
    return(
        <>
            <So.Title>Sobre</So.Title>
            <h3>O App</h3>
            <So.Texto>
                <p>
                    Este é um aplicativo(versão Beta) que te auxiliará com sua rotina de exercícios. 
                    Com ele, você poderá montar sua rotina de exercícios conforme sua necessidade apenas
                    adicionando exercícios à sua lista.
                    Ao adicionar ou remover itens da lista, você terá total flexibilidade ao programar
                    sua rotina diária, de acordo com <span>seu</span> objetivo.<br></br>
                    <br></br>
                    Importante ressaltar que este App não substitui um profissional capacitado, e adverte
                    para o correto uso dos equipamentos para evitar futuros problemas. 
                </p>
                <br></br>
            </So.Texto>
            <h3>O projeto</h3>
            <So.Texto>
                <p>
                Esse projeto tem como objetivo implementar uma aplicação web Front-end com integração ao 
                banco de dados, requisitando ao banco métodos POST, GET, DELETE e PUT, passando por todas
                as fases do CRUD. 
                </p>
                <br></br>
            </So.Texto>
            <h3>O autor</h3>
            <So.Texto>
                <p>
                Me chamo Marko, tenho 30 anos, Recife-Pe.<br></br>
                Estudo TI há pouco mais de 3 anos. Sou formado como técnico em Redes de Computadores 
                e atualmente, estudante de desenvolvimento para aplicações Web na BlueEdTech.

                <So.ImgCard>
                    <So.Img src={perfil}></So.Img>
                </So.ImgCard>
                </p>
            </So.Texto>
                 
        </>
    )
}