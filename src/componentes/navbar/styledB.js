import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div `
    display: flex;
    background-color: rgb(8, 75, 131);
    width: 100vw;
    box-shadow: 0px 8px 15px -3px #000000;
    align-items: flex-end;
`;

export const Img = styled.img `
    display: flex;
    width: 7rem;
    padding: 0.5rem 0;
    margin-left: 1%;

`;

export const Lista = styled.ul `
    display: flex;
    justify-self: center;
    color: white;
    margin-left: 20%;
`;

export const ListaItem = styled.li `
    list-style: none;
    padding: 1.2rem 1rem;    
`;

export const LinkPag =styled(Link) `
    text-decoration: none;
    color: white;   
`;

