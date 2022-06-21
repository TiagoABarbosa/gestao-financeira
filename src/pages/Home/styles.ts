import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
    background-image: url("background-finance.png");
    background-position: right;
    opacity: 100%;
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;
    text-shadow: black 0.2em 0.1em 0.1em;
`;
export const Button = styled.button`
    border: 1px solid lightblue;
    border-radius: 5px;
    color: #3E3E3E;
    padding-top: 5px;
    cursor: pointer;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    transition: 0.5s ease-out;  

    &:hover {
        background-color: #0077d2;
        color: white;
    }           
    
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;