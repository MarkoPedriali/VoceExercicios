import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: rgb(8, 75, 131);
    box-shadow: 0px 8px 15px -3px #000000;
    
    @media(max-width: 580px){
        flex-direction: column;
        align-items: center;   
    }
`;

export const Img = styled.img `
    display: flex;
    width: 10rem;
    height: 8rem;
    padding: 0.5rem 0;
    margin-left: 1%;
`;

export const Lista = styled.ul `
    display: flex;
    color: white;
    margin: auto;
`;

export const ListaItem = styled.li `
    list-style: none;
    padding: 1.2rem 1rem;    
`;

export const LinkPag =styled(Link) `
    text-decoration: none;
    color: white;
    font-size: 1.3rem ;
`;

