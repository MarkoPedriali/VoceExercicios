import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    //border-style: solid;
    width: 100%;
    margin: auto;
  
`;

export const Lateral = styled.div `
    width: 20%;
    height: 39vw;
    margin-top: 2%;
    //border-style: solid;
    border-color: black;
    background-image: url('https://vilamulher.com.br/imagens/default/2011/10/13/malhacao-para-magrinhas-68-324.jpg');
    background-repeat: no-repeat;
    
    background-position-x: -3rem;
`;

export const Conteudo = styled.div`
    width: 60%;
    justify-content: center;
    //border-style: solid;
    border-color: aqua;
    display: flex;
    flex-direction: column;

`;