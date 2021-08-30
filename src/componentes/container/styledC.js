import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    //border-style: solid;
    width: 100%;
    margin: auto;

    @media(max-width: 580px){
        justify-content: center;
    }
`;

export const Lateral = styled.div `
    width: 20vw;
    margin: 2%;
    margin-top: 5rem;

    @media(max-width: 580px){
        display: none;
    }
`;

export const Img = styled.img`
    max-width: 15rem;
    height: 18rem;
    object-fit: cover;
`;

export const Central = styled.div`
    margin-top: 1.2rem;
    width: 60%;
    justify-content: center;
    //border-style: solid;
    border-color: aqua;
    
`;

