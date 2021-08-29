import styled from "styled-components";
import { Titulo } from "../../../componentes/titulo/Titulo";
import { Link } from "react-router-dom";

export const Title = styled(Titulo)`
    justify-content: center;
`;

export const CardAread= styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;  

export const Linked= styled(Link)`
    text-decoration: none;
    
`;  