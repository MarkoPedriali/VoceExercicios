import styled from "styled-components";
import { Paragrafo } from '../../componentes/paragrafo/styledP';
import { Titulo } from "../../componentes/titulo/Titulo";

export const Title = styled(Titulo)`
    text-align: center;
`;

export const Texto =styled(Paragrafo)`
    text-align: center;
`;

export const BotaoArea = styled.div `
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
`;

export const BotaoDelete = styled.button `
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

export const Cancelar = styled.button `
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