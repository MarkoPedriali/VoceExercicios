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
    height: 20rem;
    width: 13rem;
    overflow: hidden;


    &:hover{
    transform: scale(1.4);
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
    }
`;

export const CardImg = styled.img `
    max-width: 12rem;
    height: 15rem;
    object-fit: cover;
    
`;

export const Nome = styled.h3 `
    color: red;
    text-align: center;
    padding: 0.5rem;
    background-color: #ffffff;
    font-size: 1.3em;
`;