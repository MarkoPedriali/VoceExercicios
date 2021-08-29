import styled from "styled-components";
import { Titulo } from '../../componentes/titulo/Titulo';

export const Title = styled(Titulo)`
    justify-content: center;
`;

export const Criar = styled.div`
    display: flex;
    width: 100%;
    //border-style: solid;
    justify-content: center;
    justify-self: center;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    min-width:100%;
    background-color:rgba(196, 201, 247, 0.774);
    border-radius: 1.2rem;
`;

export const Label = styled.label `
    text-align: center;
    font-size: 1.3rem;
    font-weight: bolder;
    margin:0.3rem;
    font-family: 'Rubik', sans-serif;
    color: rgba(17, 17, 17, 0.904);
    
    
`;

export const Input = styled.input `
    margin:auto;
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    font-weight: bolder;
    width: 60%;
    justify-content: center;
`;

export const Select = styled.select `
    width: 60%;
    margin:auto;
    
`;

export const Option = styled.option `
    width: 100%;
    margin-bottom: 1.2rem;
    
`;

export const botao = styled.input`
    width: 60%;
    margin:auto;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: bolder;
    color: rgb(8, 75, 131);
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.7rem;
`;