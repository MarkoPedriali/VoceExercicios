import styled from "styled-components";

export const CardArea = styled.div `
    background-color: #ffffff;
    padding: 1rem;
    //border-style: solid;
    border-color: blue;
    border-radius: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: 200ms;
    height: 23rem;
    overflow: hidden;


    &:hover{
        transform: rotate(3deg);
    }
`;

export const CardImg = styled.img `
    max-width: 12rem;
    height: 15rem;
    object-fit: cover;
    
`;

export const Nome = styled.h3 `
    color: #e76a24;
    text-align: center;
    padding: 0.5rem;
    background-color: #ffffff;
    font-size: 2em;
`;