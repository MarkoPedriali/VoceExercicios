import styled from "styled-components";
import { Titulo } from '../../componentes/titulo/Titulo';

export const Title = styled(Titulo)`
    justify-content: center;
`;

export const Card = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column ;
    margin: 0 auto;
    margin-top: 0.8rem;
`;

export const ImgBloco = styled.div `
    display: flex;
    flex-direction: center;
    justify-content: center;
`;

export const Img = styled.img `
    max-width: 20rem;
    border-radius: 0.5rem;
    height: auto;
    margin-bottom: 1rem;
`;

export const AreaBotao = styled.div`
    display:flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    
`;

export const BDeletar = styled.button `
    background-color: red;
    color:#ffffff;
    font-size: 1.2em;
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    border-style: none;
    cursor: pointer;
    transition : 200ms;

    &:hover {
        background-color: #ec2538;
    }

`;

export const BEditar = styled.button `
    background-color: #1c4595;
    color:#ffffff;
    font-size: 1.2em;
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    border-style: none;
    cursor: pointer;
    transition : 200ms;

    &:hover {
        background-color: #2860cd;
    }
    `;

export const BCancelar = styled.button `
    background-color: rgb(52, 54, 52);
    color: #ffffff;
    font-size: 1.2em;
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    border-style: none;
    cursor: pointer;
    transition : 200ms;

    &:hover {
        background-color: rgb(101, 107, 101);
    }
`;

    export const Texto = styled.p `
        font-size: 1.2em;
        padding: 0.5rem 0;
        text-align: center;
    `; 
