import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;    
`;

export const Category = styled.div<{ color: string }>`
    display: block;
    inline-size: 90px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    display: inline-block;
    padding-right: 20px;
    vertical-align: middle;
    color: ${props => props.color};
    
`;

export const Button = styled.button`
    display: inline;
    .margin: 0 0 10px 0;
    padding-top: 5px;
    float: right;
    cursor: pointer;
    border: 1px solid lightblue;
    border-radius: 5px;
    color: #292929;

    &:hover {
        background-color: #0077d2;
        color: white;
    }           
    
`;