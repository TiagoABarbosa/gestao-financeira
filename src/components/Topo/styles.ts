import styled from "styled-components";

export const Topo = styled.div`
    height: 55px;
`;

export const Button = styled.button`
    float: right;
    margin-botton: 200px;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid lightblue;
    border-radius: 5px;
    color: #3E3E3E;
    padding-top: 4px;
    transition: 0.5s ease-out;

    &:hover {
        background-color: #0077d2;
        color: white;
    }          
`;